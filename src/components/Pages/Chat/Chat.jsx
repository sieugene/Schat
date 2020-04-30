import React from 'react';
import { Row, Col } from 'antd';
import Dialogs from '../../Dialogs/Dialogs';
import Messages from '../../Messages/Messages';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import {MobileView} from "react-device-detect";

const Chat = (props) => {
    
    if (!props.firebaseAuth.uid) {
        return <Redirect to='/login' />
    }
    return (
        <>
            <MobileView>
                <h1> This is rendered only on mobile </h1>
            </MobileView>
            <Row justify="center">
                <Col xs={24} sm={12} md={8} lg={8} xl={8} >
                    <Dialogs />
                </Col>
                <Col xs={24} sm={12} md={12} lg={12} xl={12}>
                    <Route path='/chat/dialog/:roomId' render={() => (<Messages />)} />
                </Col>

            </Row>
        </>
    )
}



export default compose(withRouter)(Chat)