import React, {FC} from "react";
import {Layout, Menu, Row} from "antd";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

export const Navbar: FC = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth);
    const {logOut} = useActions()

    return (
        <Layout.Header>
            <Row justify='end'>
                {isAuth
                    ?
                    <>
                        <div style={{color: 'white'}}>
                            {user.login}
                        </div>
                        <Menu theme='dark'
                              mode="horizontal"
                              selectable={false}>
                            <Menu.Item key={1}
                                    onClick={logOut}>
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