import React from 'react'
import { Row } from 'antd';
import HeaderMessages from './Header/HeaderMessages';
import ChatBody from './ChatBody/ChatBody';

const Messages = (props) => {
    return(
      <>
        <Row>
            <HeaderMessages/>
        </Row>
        <Row>
            <ChatBody/>
        </Row>

      </>
    )
}

export default Messages