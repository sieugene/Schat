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
import SendFormMessages from './SendForm/SendFormMessages';

const currentDialog = 'dialog'
const messagesData = 'messages'

const Messages = (props) => {
  useFirestoreConnect([
    {
      collection: 'dialogs', doc: props.match.params.roomId,
      storeAs: currentDialog
    }
  ])
  useFirestoreConnect([
    {
      collection: `dialogs/${props.match.params.roomId}/messages`,
      orderBy: [
        ['createdAt'],
      ],
      storeAs: messagesData
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
          <ChatBody dialog={props.dialog} sendMessageTC={props.sendMessageTC}
          roomId={props.match.params.roomId}
          messages={props.messages}
          myId={props.myId}
          />
        </Row>
        <Row className="messages__sendforms">
          <SendFormMessages/>
        </Row>
      </div>
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    myId: state.firebase.auth.uid,
    dialog: state.firestore.ordered[currentDialog],
    messages: state.firestore.ordered[messagesData]
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    sendMessageTC
  }))(Messages)