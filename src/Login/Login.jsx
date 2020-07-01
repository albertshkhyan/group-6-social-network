import React from "react";



const Login = (props) => {
  return (
    <form>
      <div>
        <div>
          <h2>Login</h2>
        </div>
        <div>
          <input type="login" placeholder="Enter your Email, Name"/>
        </div>
        <div>
          <input type="Password" placeholder="Enter your password"/>
        </div>
        <div>
          Remember me:
          <input type="checkbox" />
        </div>
        <div>
          <button>Sumbit</button>
        </div>
      </div>
    </form>
  )
}
export default Login;
