import React from 'react'
import { Col } from 'antd'
import ProfileUser from './ProfileUser/ProfileUser'
import NavbarDialogs from './Navbar/NavbarDialogs';
import './HeaderDialogs.scss'
import { connect } from 'react-redux';
import { setUserImageTC } from './../../../redux/meReducer';

const HeaderDialogs = (props) => {
    return (
        <>
            <Col>
                <ProfileUser profile={props.profile}
                setUserImageTC={props.setUserImageTC}
                myId={props.myId}
                />
            </Col>
            <Col>
                <NavbarDialogs />
            </Col>
        </>
    )
}
let mapStateToProps = (state) => {
    return{
        profile: state.firebase.profile,
        myId: state.firebase.auth.uid
    }
}
export default connect(mapStateToProps, {
    setUserImageTC
})(HeaderDialogs)