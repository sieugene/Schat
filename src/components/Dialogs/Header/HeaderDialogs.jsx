import React from 'react'
import { Col } from 'antd'
import ProfileUser from './ProfileUser/ProfileUser'
import NavbarDialogs from './Navbar/NavbarDialogs';
import './HeaderDialogs.scss'
import { connect } from 'react-redux';
import { signOutThunkCreator } from './../../../redux/authReducer';

const HeaderDialogs = (props) => {
    return (
        <>
            <Col>
                <ProfileUser profile={props.profile} 
                signOutThunkCreator={props.signOutThunkCreator}/>
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
    signOutThunkCreator
})(HeaderDialogs)