import React from "react";
import Login from "./Login";

import s from "./style.module.css";

//LoginForm  for validation
//form - collect and send server, validatioin
const LoginForm = (props) => {
  return (
    <div>
      <form className={s.LoginForm}>
        <Login /> 
      </form>
    </div>
  );
};
export default LoginForm;
