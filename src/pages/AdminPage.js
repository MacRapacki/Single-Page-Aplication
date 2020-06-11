import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const acces = false;


const AdminPage = () => {
    return (
        <>  <Route render={() => (
            acces ? (<h3>hello</h3>) : <Redirect to="/login" />
        )} />
        </>
    );
}

export default AdminPage;