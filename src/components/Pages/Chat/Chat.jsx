import React from 'react';
import { Row, Col } from 'antd';
import Dialogs from '../../Dialogs/Dialogs';
import Messages from '../../Messages/Messages';

const Chat = (props) => {
    return (
        <>
            <Row justify="center">
           
                <Col xs={12} sm={4} md={4} lg={8} xl={8} >
                    <Dialogs/>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Messages/>
                </Col>
              
            </Row>
        </>
    )
}

export default Chat