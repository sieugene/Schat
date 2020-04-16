import React from 'react';
import { Form, Input} from 'antd';
import Button from './../Button/Button'
import { NavLink } from 'react-router-dom';
const RegisterForm = (props) => {
    const validateMessages = {
        required: 'Имя обязательное!!',
        types: {
            email: 'Неправильный email!',
        }
    };
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
            onFinishFailed={onFinishFailed}
            validateMessages={validateMessages}>
            <Form.Item name={['user', 'email']} rules={[{ type: 'email' }]}>
                <Input size="large" placeholder="Email" />
            </Form.Item>
            <Form.Item name={['user', 'name']} rules={[{ required: true }]}>
                <Input size="large" placeholder="Ваше Имя" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Введите пароль!',
                    },
                ]}>
                <Input size="large" type="password" placeholder="Пароль" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Введите пароль!',
                    },
                ]}>
                <Input size="large" type="password" placeholder="Повторите пароль" />
            </Form.Item>
            <Form.Item >
                <Button type="primary" size="large" htmlType="submit">
                    Зарегистрироваться
            </Button>
            </Form.Item>
            <Form.Item>
            <NavLink className='auth__register-link' to='/login'>Войти в аккаунт</NavLink>
            </Form.Item>
        </Form>

    )
}

export default RegisterForm