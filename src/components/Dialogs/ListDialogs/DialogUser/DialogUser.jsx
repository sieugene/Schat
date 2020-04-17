import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Row, Col, Avatar } from 'antd'

const DialogUser = (props) => {
    return (
        <>
            <Col>
                <Row>
                    <Col>
                        <Avatar size={30} icon={<UserOutlined />} />
                    </Col>
                    <Col>
                        <h3><b>Dialog user</b></h3>
                        <p>past message</p>
                    </Col>
                </Row>

            </Col>
        </>

    )
}

export default DialogUser