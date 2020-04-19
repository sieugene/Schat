import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';

const Room = (props) => {
    useFirestoreConnect([
        { collection: 'rooms', doc: props.match.params.roomId }
    ])
    return (
        <div>
            <h3>Добро пожаловать в комнату</h3>
            {props.rooms ?
                props.rooms.map((r) => {
                    return <div>
                        <h3>Room id: {r.id}</h3>
                        <h4>Creator: {r.creator}</h4>
            Users: {r.Users}
                    </div>
                })
                :
                ''
            }

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
    }))(Room)