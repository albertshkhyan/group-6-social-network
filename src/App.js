import React from "react";
import Header from "./Header/Header";
import "./App.css";//👍
import "./media.css";
import Dashboard from './Dashboard/Dashboard';
import Profile from "./Profile/Profile";
import Login from './Login/Login';

import {
  Switch,
  Route,
} from "react-router-dom";

function App(props) {
  return (
    <div className="App">
      <Header />

      <div className="flexible">
        <Dashboard />
        {/* <Dialogs /> */}
        <main className="main">

          <Switch>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/profile">
              <Profile />
            </Route>

          </Switch>
          {
            // if(url === "Profile") {
            //   <Profile />

            // }
            // else if(url === "Settings" {
            //   <Settings />

            // })
          }
        </main>
      </div>

    </div>
  )
}
export const x = 10;
export default App;
