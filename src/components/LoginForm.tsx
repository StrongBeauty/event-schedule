import React, {FC} from "react";
import {Button, Form, Input} from "antd";

export const LoginForm: FC = () => {
    return (
        <Form>
            <Form.Item label='Username'
                       name='userName'
                       rules={[{ required: true, message: 'Please, input username!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item label='Password'
                       name='password'
                       rules={[{ required: true, message: 'Please, input password!' }]}
            >
                <Input/>
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                <Button type='primary'
                        htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}