import React from 'react'
import { Row } from 'antd';
import HeaderMessages from './Header/HeaderMessages';
import ChatBody from './ChatBody/ChatBody';
import './Messages.scss'
const Messages = (props) => {
  return (
    <div className="messages">
      <Row className="messages__header">
        <HeaderMessages />
      </Row>
      <Row className="messages__body">
        <ChatBody />
      </Row>
    </div>
  )
}

export default Messages