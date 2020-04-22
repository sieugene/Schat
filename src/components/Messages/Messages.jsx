import React from 'react'
import { Row, Spin } from 'antd';
import HeaderMessages from './Header/HeaderMessages';
import ChatBody from './ChatBody/ChatBody';
import './Messages.scss'
import { useFirestoreConnect } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendMessageTC } from './../../redux/messagesReducer';
import { compose } from 'redux';

const currentDialog = 'dialog'

const Messages = (props) => {

  useFirestoreConnect([
    {
      collection: 'dialogs', doc: props.match.params.roomId,
      storeAs: currentDialog
    }
  ])
  //
  if (!props.dialog) {
    return <div><Spin /></div>
  }
  return (
    <>
      <div className="messages">
        <Row className="messages__header">
          <HeaderMessages />
        </Row>
        <Row className="messages__body">
          <ChatBody dialog={props.dialog} sendMessageTC={props.sendMessageTC}/>
        </Row>
      </div>
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    myId: state.firebase.auth.uid,
    dialog: state.firestore.ordered[currentDialog]
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    sendMessageTC
  }))(Messages)