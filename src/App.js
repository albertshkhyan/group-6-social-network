import React from "react";
import Header from "./common/components/containers/Header/Header";
import "./App.css";//👍
import "./media.css";
import Dashboard from './Dashboard/Dashboard';
import Profile from "./Profile/Profile";
import LoginForm from "./Login/LoginForm";
import News from "./News/News";
import Music from "./Music/Music";
import Settings from "./Settings/Settings";
import Users from "./Users/Users";


import Dialogs from './Dialogs/Dialogs';

import {
  Switch,
  Route,
} from "react-router-dom";

function App(props) {
  debugger

  return (
    <div className="App">
      <Header menu={["About"]}/>
      <div className="flexible">
        <Dashboard />
        <main className="main">
          <Switch>
            <Route exact path="/profile" component={() => (
              <Profile name="Profile page" />
            )}/>
            {/* <Route path="/profile">
              <Profile name={123} />
            </Route> */}
            {/* <Route path="/profile/123" component={() => <h2>User ALex page</h2> }/> */}
            {/* <Route path="/login" component={Login}/> */}
            <Route path="/login" component={LoginForm}/>
            <Route exact path="/dialogs" component={Dialogs}/>
            <Route path="/dialogs/123" component={() => <h2>dialogs123</h2>}/>
            <Route path="/news" component={News}/>
            <Route path="/music" component={Music}/>
            <Route path="/settings" component={Settings}/>
            <Route path="/users" component={Users}/>
          </Switch>
        </main>
      </div>

    </div>
  )
}
export const x = 10;
export default App;
