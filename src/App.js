import React from "react";
import Header from "./Header/Header";
import "./App.css";//👍
import "./media.css";
import Dashboard from './Dashboard/Dashboard';
import Profile from "./Profile/Profile";
import Login from "./Login/Login";
import Messages from "./Dialogs/Message/Message";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Users from "./Users/Users";



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

            <Route path="/messages">
              <Messages/>
            </Route>

            <Route path="/news">
              <News/>
            </Route>

            <Route path="/music">
              <Music/>
            </Route>

            <Route path="/settings">
              <Settings/>
            </Route>

            <Route path="/users">
              <Users/>
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
