import React from 'react';
import { Route, Switch, } from 'react-router-dom'

import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';

const Page = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={() => (
                    < HomePage />
                )} />
                <Route path='/products' render={() => (
                    <ProductsPage />
                )} />
                <Route path='/contact' render={() => (
                    <ContactPage />
                )} />
                <Route path='/admin' render={() => (
                    <AdminPage />
                )} />
                <Route path='/login' render={() => (
                    <LoginPage />
                )} />
                <Route render={() => (
                    <ErrorPage />
                )} />
            </Switch>
        </>
    );
}

export default Page;