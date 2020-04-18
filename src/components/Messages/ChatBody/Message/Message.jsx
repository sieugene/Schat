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
                        <Col span={20}>
                            <MessageType message={'test'}
                                messageType={'text'} />
                        </Col>
                        <Col span={4}>
                            <Avatar size={34} icon={<UserOutlined />} />
                        </Col>
                    </>
                    :
                    <>
                        <Col span={4}>
                            <Avatar size={34} icon={<UserOutlined />} />
                        </Col>
                        <Col span={20}>
                            <MessageType message={'test'}
                                messageType={'text'} />
                        </Col>
                    </>
                }
            </Row>
        </Col>
    )
}

export default Message