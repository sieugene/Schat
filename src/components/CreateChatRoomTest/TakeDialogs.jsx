import React from 'react'
import { connect } from 'react-redux'
import { createChatRoom, checkDuplicateAndCreateRoom } from './../../redux/CreateChat';
import { useFirestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter, NavLink } from 'react-router-dom';
import CreateChatRoomTest from './CreateChatRoomTest';
import { Spin } from 'antd';

const creatorsRooms = 'creatorsRooms'
const invitedRooms = 'invitedRooms'

const TakeDialogs = (props) => {

    useFirestoreConnect([
        { collection: 'users'}
    ])
    useFirestoreConnect([
        { collection: 'dialogs'}
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
        return <div key={m.id} style={{ border: '1px solid black', padding: '10px' }}>
            <h2>id создателя: {m.creator}</h2>
            <h2>id приглашенного: {m.invited}</h2>
            <b>Имя с кем диалог: {getNameInDialog(m.invited, m.creator)}</b>
            <br />
            <NavLink to={'room/' + m.id}>Ссылка</NavLink>
        </div>
    })
    //проверка дублирования уже с имеющимися 
    const creatingChat = (value) => {
        props.checkDuplicateAndCreateRoom(value,result)
    }
    //loading
    if(props.requestedData.users & props.requestedData.dialogs){
        return <div><Spin /></div>
    }
    return (
        <CreateChatRoomTest dialogs={mapping}
            myId={props.myId} createChatRoom={props.createChatRoom}
            creatingChat={creatingChat}
            users={props.users}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        myId: state.firebase.auth.uid,
        roomsInvited: state.firestore.ordered[invitedRooms],
        roomsCreators: state.firestore.ordered[creatorsRooms],
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
    }))(TakeDialogs)