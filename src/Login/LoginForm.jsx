import React from 'react';
import Login from './Login';

import s from"./style.module.css";

const LoginForm = (props) => {
    return (
        <div className={s.LoginForm}>
            <h2>Login</h2>
            <div>
                <input type="Email"/>
                <input type="Password"/>
                <input type="checkbox"/>
            </div>
            <div>
                <button>Sumbit</button>
            </div>

        </div>
    )
}
export default LoginForm;