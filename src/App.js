import React from "react";
import Header from "./common/components/containers/Header/Header";

import Dashboard from './common/components/containers/Dashboard/Dashboard';
import Profile from "./common/components/containers/Profile/Profile";
import News from "./common/components/containers/News/News";
import Music from "./common/components/containers/Music/Music";
import Settings from "./Settings/Settings";
import Users from "./common/components/containers/Users/Users";
import Message from "./common/components/sections/Message/Message";

import Dialogs from './common/components/containers/Dialogs/Dialogs';

import Login from './common/components/sections/Login/Login';

import {
  Switch,
  Route,
} from "react-router-dom";

import "./App.css";//👍
import "./media.css";


function App(props) {
  return (
    <div className="App">
      <Header menu={["About"]} />
      <div className="flexible">
        <Dashboard />
        <main className="main">
          <Switch>
            <Route exact path="/profile" render={() => (
              <Profile name="Profile page" posts={props.state.posts} />
            )} />
            <Route path="/login" component={Login} />
            <Route exact path="/dialogs" render={() =>
              <Dialogs
                dialogs={props.state.dialogs}
                messages={props.state.messages}
              />
            } />
            <Route path="/dialogs/123" component={() => <h2>dialogs123</h2>} />
            <Route path="/news" component={News} />
            <Route path="/music" component={Music} />
            <Route path="/settings" component={Settings} />
            <Route path="/users" component={Users} />
          </Switch>
        </main>
      </div>

    </div>
  )
}
export default App;
