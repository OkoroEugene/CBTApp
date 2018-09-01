'use strict';

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link
} from 'react-router-dom';
import Login from './components/Login';
// import MainLayout from './app/components/MainLayout';
import App from './App';
import EmptyLayout from './components/EmptyLayout';
// import Images from './components/Images';
// import Documents from './components/Documents';
// import Media from './components/Media';
// import NewFile from './components/NewFile';
// import Dashboard from './components/Dashboard';
// import Login from './components/Login';
// import Register from './components/Register';

const AppRoute = ({ Component, Layout }, ...rest) => {
    return (
        <Route {...rest} render={props => (
            <Layout>
                <Component {...props} />
            </Layout>
        )} />
    );
}

const RouteApp = () => (
    <Router>
        <Switch>
            <AppRoute exact path={"/"} Layout={EmptyLayout} Component={App} />
            {/* <AppRoute exact path={"/Images"} Layout={MainLayout} Component={Images} />
            <AppRoute exact path={"/document"} Layout={MainLayout} Component={Documents} />
            <AppRoute exact path={"/media"} Layout={MainLayout} Component={Media} />
            <AppRoute exact path={"/new-file"} Layout={MainLayout} Component={NewFile} />
            <AppRoute exact path={"/login"} Layout={EmptyLayout} Component={Login} />
            <AppRoute exact path={"/register"} Layout={EmptyLayout} Component={Register} /> */}
        </Switch>
    </Router>
)

export default RouteApp;