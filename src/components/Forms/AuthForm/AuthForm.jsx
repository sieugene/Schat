import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import Button from '../../Button/Button'
import { NavLink } from 'react-router-dom';
import ShowErrors from '../../Assets/ShowErrors/ShowErrors';
import './AuthForm.scss'

const AuthForm = React.memo(props => {
    const onFinish = values => {
        console.log('Success:', values);
        props.authThunkCreator(values);
    };
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Form
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}>
          
            <ShowErrors error={props.errorsAuth.errorsSignIn}/>
         
            <Form.Item
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your email!',
                    },
                ]}>
                <Input size="large" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}>
                <Input.Password size="large" />
            </Form.Item>
            <Form.Item name="remember" valuePropName="checked">
                <Checkbox size="large">Remember me</Checkbox>
            </Form.Item>
            <Form.Item >
                <Button type="primary" size="large" htmlType="submit">
                    Войти в аккаунт
            </Button>
            </Form.Item>
            <Form.Item>
                <NavLink className='auth__register-link' to='/register'>Зарегистрироваться</NavLink>
            </Form.Item>
        </Form>

                )
})


export default AuthForm