import React, {FC} from 'react';
import {AppRouter} from "./components/AppRowter";
import {Layout} from "antd";
import {Navbar} from "./components/Navbar";

const App: FC = () => {

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
