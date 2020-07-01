import React from "react";


// const foo = () => {
//   return 123;
// }

const Login = (props) => {
  return (
    <form>
        <div>
          {/* {foo()} */}
          <h2>Login</h2>
          <div>
            <input type="Email" placeholder="Enter your login"/>
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
