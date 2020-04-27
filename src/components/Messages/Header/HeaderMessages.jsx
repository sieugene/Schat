import React from 'react'
import CurrentUser from '../CurrentUser/CurrentUser'
import { Col } from 'antd'
import './HeaderMessages.scss'
import { connect } from 'react-redux';
import { useFirebaseConnect } from 'react-redux-firebase';

const HeaderMessages = (props) => {
    useFirebaseConnect('presence');
    return (
        <>
            <Col>
                <CurrentUser myId={props.myId}
                    dialog={props.dialog}
                    users={props.users}
                    usersOnline={props.usersOnline}
                />
            </Col>

        </>
    )
}

let mapStateToProps = (state) => {
    return {
        users: state.firestore.ordered.users,
        usersOnline: state.firebase.ordered.presence
    }
}
export default connect(mapStateToProps)(HeaderMessages);