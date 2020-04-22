import React, { useEffect } from 'react'
import './ListDialogs.scss'
import { connect } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { Spin } from 'antd';
import { createChatRoom, checkDuplicateAndCreateRoom } from '../../../redux/CreateChat';
import DialogUser from './DialogUser/DialogUser';
import DialogItem from './DialogItem';
import { setFilteredDialogsAC } from './../../../redux/dialogsReducer';


const ListDialogs = (props) => {

    useFirestoreConnect([
        { collection: 'users' }
    ])
    useFirestoreConnect([
        { collection: 'dialogs' }
    ])
    useEffect(() => {
        let filter = props.dialogs && props.dialogs.filter((t) => {
            return t.creator === props.myId || t.invited === props.myId
        })
        props.setFilteredDialogsAC(filter)
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.dialogs])

    const mapping = props.filteredDialogs && props.filteredDialogs.map((m) => {
        return <DialogItem id={m.id} invited={m.invited}
            creator={m.creator}
            users={props.users}
            myId={props.myId}
        />
    })
    //loading
    if (props.requestedData.users & props.requestedData.dialogs) {
        return <div><Spin /></div>
    }
    return (
        <DialogUser dialogs={mapping}
            myId={props.myId} 
            users={props.users}
        />
    )
}

let mapStateToProps = (state) => {
    return {
        myId: state.firebase.auth.uid,
        users: state.firestore.ordered.users,
        dialogs: state.firestore.ordered.dialogs,
        requestedData: state.firestore.status.requesting,
        filteredDialogs: state.filtDialogs.filteredDialogs
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, {
        createChatRoom,
        checkDuplicateAndCreateRoom,
        setFilteredDialogsAC
    }))(ListDialogs)