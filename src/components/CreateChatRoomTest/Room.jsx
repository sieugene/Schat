import React from 'react'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Spin } from 'antd';

const Room = (props) => {
    useFirestoreConnect([
        { collection: 'dialogs', doc: props.match.params.roomId }
    ])
    //проверяем изменение стейта, если запрос не успел пройти
    
    if(props.dialog && props.dialog.length >= 2){
        return <div><Spin /></div>
    }
    return (
        <div>
            <h3>Добро пожаловать в комнату</h3>
            {props.dialog ?
                props.dialog.map((r) => {
                    return <div key={r.id}>
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
        dialog: state.firestore.ordered.dialogs
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
    }))(Room)