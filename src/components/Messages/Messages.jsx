import React, { useEffect } from 'react'
import { Row, Spin, Alert } from 'antd';
import HeaderMessages from './Header/HeaderMessages';
import ChatBody from './ChatBody/ChatBody';
import './Messages.scss'
import { useFirestoreConnect } from 'react-redux-firebase';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendMessageTC } from './../../redux/messagesReducer';
import { compose } from 'redux';
import SendFormMessages from './SendForm/SendFormMessages';
import { chatAccess } from './MessagesHelper/MessagesHelper';
import { setCurrentRoomId } from '../../redux/dialogsReducer';

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

  useEffect(() => {
    props.setCurrentRoomId(props.match.params.roomId)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.match.params.roomId])

  if (!props.dialog) {
    return <div><Spin /></div>
  } else if (chatAccess(props.dialog, props.myId)) {
    return <Alert message="У вас нет доступа" type="error" />
  }
  return (
    <>
      <div className="messages">
        <Row className="messages__header">
          <HeaderMessages dialog={props.dialog}
            myId={props.myId}
          />
        </Row>
        <Row className="messages__body">
          <div className="messages__body__height">
            <ChatBody dialog={props.dialog} sendMessageTC={props.sendMessageTC}
              roomId={props.match.params.roomId}
              messages={props.messages}
              myId={props.myId}
              users={props.users}
              profile={props.profile}
            />
          </div>
        </Row>
        <Row className="messages__sendforms">
          <SendFormMessages />
        </Row>
      </div>
    </>
  )
}

let mapStateToProps = (state) => {
  return {
    myId: state.firebase.auth.uid,
    dialog: state.firestore.ordered[currentDialog],
    messages: state.firestore.ordered[messagesData],
    users: state.firestore.ordered.users,
    profile: state.firebase.profile
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, {
    sendMessageTC,
    setCurrentRoomId
  }))(Messages)