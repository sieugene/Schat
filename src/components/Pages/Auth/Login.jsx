import React from 'react';
import MainBlock from '../../MainBlock/MainBlock';
import './Auth.scss'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { authThunkCreator} from '../../../redux/authReducer';
import AuthForm from './../../Forms/AuthForm/AuthForm';
import { Redirect } from 'react-router-dom';



const Login = (props) => {
    if(props.firebaseAuth.uid){
        return <Redirect to='/chat'/>
    }
    return (
        <section className='auth'>
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Войти в аккаунт</h2>
                    <p>Пожалуйста, войдите в свой аккаунт.</p>
                </div>
                <MainBlock>
                    <AuthForm authThunkCreator={props.authThunkCreator}
                        errorsAuth={props.errorsAuth}
                        isLoadedAuth={props.isLoadedAuth}
                    />
                </MainBlock>
            </div>
        </section>
    )
}

let mapStateToProps = (state) => {
    return {
        isLoadedAuth: state.auth.isLoaded,
        errorsAuth: state.auth.errors
    }
}

export default compose(
    connect(mapStateToProps, {
        authThunkCreator
    })
)(Login);