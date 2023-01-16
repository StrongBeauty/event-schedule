import React, {FC} from "react";
import './Login.css';
import {Card, Layout, Row} from "antd";
import {LoginForm} from "../components/LoginForm";

export const Login: FC = () => {
    return (
        <Layout>
            <Row justify='center'
                 align='middle'
                 className='pageBlock'
            >
                <Card>
                    <LoginForm/>
                </Card>
            </Row>
        </Layout>
    )
}