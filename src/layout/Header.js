import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../style/Header.css';

import homeImg from '../images/home.jpg';
import productsImg from '../images/products.jpg';
import contactImg from '../images/contact.jpg';
import adminImg from '../images/admin.jpg';
import errorImg from '../images/error.jpg'


const Header = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact render={() => (
                    <img src={homeImg} alt='code' />
                )} />
                <Route path="/products" render={() => (
                    <img src={productsImg} alt='code' />
                )} />
                <Route path="/contact" render={() => (
                    <img src={contactImg} alt='code' />
                )} />
                <Route path="/admin" render={() => (
                    <img src={adminImg} alt='code' />
                )} />
                <Route render={() => (
                    <img src={errorImg} alt='code' />
                )} />
            </Switch>

        </>
    );
}

export default Header;