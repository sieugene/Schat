import React from 'react'
import { Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MessageType from './MessageType';

const Message = (props) => {
    return (
        <Row>
            <Col>
                <Avatar size={20} icon={<UserOutlined />} />
            </Col>
            <Col>
                <MessageType message={'test'} messageType={'text'}/>
                <MessageType message={'test'} messageType={'img'}/>
                <MessageType message={'test'} messageType={'audio'}/>
            </Col>
        </Row>

    )
}

export default Message