import React, {FC, useState} from "react";
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

export const LoginForm: FC = () => {
    const {error, isLoading} = useTypedSelector(state => state.auth);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const {logIn} = useActions();

    const submit = () => {
        logIn(login, password)
    }

    return (
        <Form
            onFinish={submit}
        >
            {error && <div style={{color: 'red'}}>
                {error}
            </div>
            }
            <Form.Item label='Login'
                       name='login'
                       rules={[rules.required('Please, input login!')]}
            >
                <Input
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </Form.Item>
            <Form.Item label='Password'
                       name='password'
                       rules={[rules.required('Please, input password!')]}
            >
                <Input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type='password'
                />
            </Form.Item>
            <Form.Item wrapperCol={{offset: 8, span: 8}}>
                <Button type='primary'
                        htmlType='submit'
                        loading={isLoading}
                >
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}