import React from 'react'
import { Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
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
                                    messageType={props.messageType} />
                                <Avatar size={34} icon={<UserOutlined />} />
                            </div>
                        </Col>
                    </>
                    :
                    <>
                        <Col span={24}>
                            <div className="messageItem"
                                style={{ justifyContent: props.alignMessage }}>
                                <Avatar size={34} icon={<UserOutlined />} />
                                <MessageType message={props.message}
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