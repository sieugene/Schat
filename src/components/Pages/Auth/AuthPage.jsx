import React from 'react';
import MainBlock from '../../MainBlock/MainBlock';
import './Auth.scss'
import AuthForm from '../../AuthForm/AuthForm';
import RegisterForm from '../../RegisterForm/RegisterForm';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { authThunkCreator, signUpThunkCreator } from '../../../redux/authReducer';
const AuthPage = (props) => {

    return (
        <section className='auth'>
            <div className="auth__content">
                <Route exact path='/login' render={() => (
                    <>
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
                    </>
                )} />
                <Route exact path='/register' render={() => (
                    <>
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
                    </>
                )} />

            </div>
        </section>
    )
}

let mapStateToProps = (state) => {
    return{
        isLoadedAuth: state.auth.isLoaded,
        errorsAuth: state.auth.errors
    }
}

export default compose(connect(mapStateToProps,{
    authThunkCreator,
    signUpThunkCreator
})
)(AuthPage);