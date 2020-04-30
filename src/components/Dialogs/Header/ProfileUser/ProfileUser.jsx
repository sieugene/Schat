import React from 'react'
import { Row, Col, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons'


const ProfileUser = (props) => {
    const userImage = props.profile.photoURL !== "" ? props.profile.photoURL : <UserOutlined />
    return (
        <>
            <Row>
                <Col>
                    <Avatar size={40} icon={userImage} />
                </Col>
                <Col>
                    <h3 className='profile__name'><b>{props.profile.email}</b></h3>
                    <p className='profile__online'>Online</p>
                </Col>
            </Row>
        </>
    )
}

export default ProfileUser