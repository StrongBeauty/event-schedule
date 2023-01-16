import React, {FC, useEffect} from 'react';
import {AppRouter} from "./components/AppRowter";
import {Layout} from "antd";
import {Navbar} from "./components/Navbar";
import {useActions} from "./hooks/useActions";
import {UserType} from "./store/reducers/auth/actions";

const App: FC = () => {
    const {setUser, setIsAuth} = useActions();

    useEffect(() => {
        localStorage.getItem('login')
        && setUser({login: localStorage.getItem('login')} as UserType)
        && setIsAuth(true)
    }, [])

    return (
        <Layout>
            <Navbar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

export default App;
