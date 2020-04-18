import React from 'react'
import { Row, Col } from 'antd';
import HeaderMessages from './Header/HeaderMessages';
import ChatBody from './ChatBody/ChatBody';

const Messages = (props) => {
  return (
    <>
      <div className="container">
        <Row>
          <HeaderMessages />
        </Row>
        <Row>
          <ChatBody />
        </Row>
      </div>
    </>
  )
}

export default Messages