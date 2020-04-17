import React from 'react'
import { Row, Col, Avatar } from 'antd';
import {UserOutlined} from '@ant-design/icons'

const ProfileUser = (props) => {
    return (
        <div>
            <Row>
                <Col>
                    <Avatar size={30} icon={<UserOutlined />} />
                </Col>
                <Col>
                    <h3><b>Name user</b></h3>
                    <p>Online</p>
                </Col>
            </Row>

        </div>
    )
}

export default ProfileUser