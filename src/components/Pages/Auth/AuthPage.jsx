import React from 'react';
import MainBlock from '../../MainBlock/MainBlock';
import './Auth.scss'
import AuthForm from '../../AuthForm/AuthForm';
import RegisterForm from '../../RegisterForm/RegisterForm';
import { Route } from 'react-router-dom';
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
                            <AuthForm />
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
                            <RegisterForm />
                        </MainBlock>
                    </>
                )} />

            </div>
        </section>
    )
}

export default AuthPage;