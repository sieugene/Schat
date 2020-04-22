import React from 'react'
import { connect } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter, NavLink } from 'react-router-dom';
import { Spin, Col, Row, Avatar } from 'antd';
import { createChatRoom, checkDuplicateAndCreateRoom } from '../../../redux/CreateChat';
import DialogUser from './DialogUser/DialogUser';
import { UserOutlined } from '@ant-design/icons';


const ListDialogs = (props) => {

    useFirestoreConnect([
        { collection: 'users' }
    ])
    useFirestoreConnect([
        { collection: 'dialogs' }
    ])


    const getNameInDialog = (invited, creator) => {
        if (props.users.length !== 0) {
            if (invited === props.myId) {
                let result = props.users.filter((id) => {
                    return id.id === creator
                })
                return result[0] ? result[0].firstName : ''
            } else {
                let result = props.users.filter((id) => {
                    return id.id === invited
                })
                return result[0] ? result[0].firstName : ''
            }
        }
    }

    const result = props.dialogs && props.dialogs.filter((t) => {
        return t.creator === props.myId || t.invited === props.myId
    })
    const mapping = result && result.map((m) => {
        return <Col span={24} className='dialog__item' key={m.id}>
            <NavLink to={'/chat/dialog/' + m.id} >
                <Row>
                    <Col>
                        <Avatar size={30} icon={<UserOutlined />} />
                    </Col>
                    <Col>
                        <h3 className='dialogs__username'>
                            <b>{getNameInDialog(m.invited, m.creator)}</b>
                        </h3>
                        <p className='dialogs__pastmessage'>past message</p>
                    </Col>
                </Row>
            </NavLink>
     </Col>
    })
//проверка дублирования уже с имеющимися 
const creatingChat = (value) => {
    props.checkDuplicateAndCreateRoom(value, result)
}
//loading
if (props.requestedData.users & props.requestedData.dialogs) {
    return <div><Spin /></div>
}
return (
    <DialogUser dialogs={mapping}
        myId={props.myId} createChatRoom={props.createChatRoom}
        creatingChat={creatingChat}
        users={props.users}
    />
)
}

let mapStateToProps = (state) => {
    return {
        myId: state.firebase.auth.uid,
        users: state.firestore.ordered.users,
        dialogs: state.firestore.ordered.dialogs,
        requestedData: state.firestore.status.requesting
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        createChatRoom,
        checkDuplicateAndCreateRoom
    }))(ListDialogs)