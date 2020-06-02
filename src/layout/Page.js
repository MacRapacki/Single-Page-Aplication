import React from 'react';
import { Route, Switch, } from 'react-router-dom'

const Page = () => {
    return (
        <>
            <Switch>
                <Route exact path='/' render={() => (
                    <h1>Witaj</h1>
                )} />
                <Route path='/products' render={() => (
                    <h1>products</h1>
                )} />
                <Route path='/contact' render={() => (
                    <h1>concact</h1>
                )} />
                <Route path='/admin' render={() => (
                    <h1>admin panel</h1>
                )} />
                <Route render={() => (
                    <h1>smoething wrong</h1>
                )} />
            </Switch>
        </>
    );
}

export default Page;