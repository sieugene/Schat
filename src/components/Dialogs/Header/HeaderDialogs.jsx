import React from 'react'
import { Col } from 'antd'
import ProfileUser from './ProfileUser/ProfileUser'
import NavbarDialogs from './Navbar/NavbarDialogs';
import './HeaderDialogs.scss'
import { connect } from 'react-redux';

const HeaderDialogs = (props) => {
    return (
        <>
            <Col>
                <ProfileUser profile={props.profile}/>
            </Col>
            <Col>
                <NavbarDialogs />
            </Col>
        </>
    )
}
let mapStateToProps = (state) => {
    return{
        profile: state.firebase.profile
    }
}
export default connect(mapStateToProps, {
})(HeaderDialogs)