import React from 'react';
import MainBlock from '../../MainBlock/MainBlock';
import './Auth.scss'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signUpThunkCreator } from '../../../redux/authReducer';
import RegisterForm from './../../Forms/RegisterForm/RegisterForm';
import { Redirect } from 'react-router-dom';


const Register = (props) => {
    if(props.firebaseAuth.uid){
        return <Redirect to='/chat'/>
    }
    return (
        <section className='auth'>
            <div className="auth__content">
                <div className="auth__top">
                    <h2>Регистрация</h2>
                    <p>Для входа в чат, вам нужно зарегистрироваться.</p>
                </div>
                <MainBlock>
                    <RegisterForm signUpThunkCreator={props.signUpThunkCreator}
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
        errorsAuth: state.auth.errors,

    }
}

export default compose(
    connect(mapStateToProps, {
        signUpThunkCreator
    })
)(Register);