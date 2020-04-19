import React from 'react'
import { connect } from 'react-redux'
import { createChatRoom } from './../../redux/CreateChat';
import { useFirestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter, NavLink } from 'react-router-dom';

const CreateChatRoomTest = (props) => {
    useFirestoreConnect([
        { collection: 'rooms' }
    ])
    return (
        <div>
            <h5>твой id: {props.myId}</h5>
            <button
                onClick={() => {
                    props.createChatRoom(props.myId)
                }}
            >
                Создать чат
            </button>
            {props.rooms ?
                props.rooms.map((r) => {
                    return <div>
                        номер{' ' + r.id}
                        <NavLink to={'room/' + r.id}>
                            перейти
                        </NavLink>
                    </div>
                })
                : ''
            }
            <a>
                Ссылка:
            </a>
            <br />
            <br />
            <br />
            <br />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        myId: state.firebase.auth.uid,
        rooms: state.firestore.ordered.rooms
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        createChatRoom
    }))(CreateChatRoomTest)