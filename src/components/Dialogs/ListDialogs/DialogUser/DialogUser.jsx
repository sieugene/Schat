import React from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Row, Col, Avatar } from 'antd'

const DialogUser = (props) => {
    return (
        <>
            <Col span={24} className='dialog__item'>
                <Row>
                    <Col>
                        <Avatar size={30} icon={<UserOutlined />} />
                    </Col>
                    <Col>
                        <h3 className='dialogs__username'><b>Dialog user</b></h3>
                        <p className='dialogs__pastmessage'>past message</p>
                    </Col>
                </Row>

            </Col>
        </>

    )
}

export default DialogUser