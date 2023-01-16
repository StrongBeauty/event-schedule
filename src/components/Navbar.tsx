import React, {FC} from "react";
import {Layout, Menu, Row} from "antd";
import {useTypedSelector} from "../hooks/useTypedSelector";

export const Navbar: FC = () => {
    const isAuth = useTypedSelector(state => state.auth.isAuth)

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}>
                            name
                        </div>
                        <Menu theme='dark'
                              mode="horizontal"
                              selectable={false}>
                            <Menu.Item key={1}
                                       onClick={() => console.log('logout')}>
                                Logout
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu theme='dark'
                          selectable={false}>
                        <Menu.Item key={2}>
                            Login
                        </Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header>
    )
}