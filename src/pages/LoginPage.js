import React from 'react';
import '../style/LoginPage.css'

const LoginPage = () => {
    return (
        <>
            <label className="login" htmlFor="">Login<input className="login__input" type="text" /></label>
            <label className="password" htmlFor="">Password<input className="login__input" type="password" /></label>
            <button className="login__btn" >Enter</button>
        </>
    );
}

export default LoginPage;