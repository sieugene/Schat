import React from 'react'
import { Row, Col } from 'antd';
import MessageType from './MessageType';
import './Message.scss'


const Message = (props) => {
    return (
        <Col span={24}>
            <Row justify={props.alignMessage}>
                {props.alignMessage === 'flex-end' ?
                    <>
                        <Col span={24}>
                            <div className="messageItem"
                                style={{ justifyContent: props.alignMessage }}>
                                <MessageType message={props.message}
                                    createdAt={props.createdAt}
                                    title={props.title}
                                    messageType={props.messageType} />
                                {props.myAvatar}
                            </div>
                        </Col>
                    </>
                    :
                    <>
                        <Col span={24}>
                            <div className="messageItem"
                                style={{ justifyContent: props.alignMessage }}>
                                {props.userAvatar}
                                <MessageType message={props.message}
                                    createdAt={props.createdAt}
                                    title={props.title}
                                    messageType={props.messageType} />
                            </div>
                        </Col>
                    </>
                }
            </Row>
        </Col>
    )
}

export default Message