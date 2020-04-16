import React from 'react';
import { Form, Input, Checkbox } from 'antd';
import Button from './../Button/Button'
import { NavLink } from 'react-router-dom';
const AuthForm = (props) => {
    const onFinish = values => {
        console.log('Success:', values);
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
            <Form.Item
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
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
}

export default AuthForm