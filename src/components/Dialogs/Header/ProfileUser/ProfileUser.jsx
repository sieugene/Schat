import React from 'react'
import { Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons'


const ProfileUser = (props) => {
    return (
            <Row>
                <Col>
                    <Avatar size={40} icon={<UserOutlined />} />
                </Col>
                <Col>
                    <h3 className='profile__name'><b>Name user</b></h3>
                    <p className='profile__online'>Online</p>
                </Col>
            </Row>
    )
}

export default ProfileUser