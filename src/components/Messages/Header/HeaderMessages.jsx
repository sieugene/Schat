import React from 'react'
import CurrentUser from '../CurrentUser/CurrentUser'
import { Col } from 'antd'

const HeaderMessages = (props) => {
    return (
        <>
            <Col>
                <CurrentUser />
            </Col>

        </>
    )
}

export default HeaderMessages