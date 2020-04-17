import React from 'react'
import { Col } from 'antd'
import ProfileUser from './ProfileUser/ProfileUser'
import NavbarDialogs from './Navbar/NavbarDialogs';

const HeaderDialogs = (props) => {
    return (
        <>
            <Col>
                <ProfileUser />
            </Col>
            <Col>
                <NavbarDialogs />
            </Col>
        </>
    )
}

export default HeaderDialogs