import React from "react";
import Header from "./common/components/containers/Header/Header";
import "./App.css";//👍
import "./media.css";
import Dashboard from './common/components/containers/Dashboard/Dashboard';
import Profile from "./common/components/containers/Profile/Profile";
import News from "./common/components/containers/News/News";
import Music from "./common/components/containers/Music/Music";
import Settings from "./Settings/Settings";
import Users from "./common/components/containers/Users/Users";


import Dialogs from './common/components/containers/Dialogs/Dialogs';

import Login from './common/components/sections/Login/Login';

import {
  Switch,
  Route,
} from "react-router-dom";


function App(props) {
  console.log('props', props);
  return (
    <div className="App">
      <Header menu={["About"]}/>
      <div className="flexible">
        <Dashboard />
        <main className="main">
          <Switch>
            <Route exact path="/profile" component={() => (
              <Profile name="Profile page" posts={props.posts} />
            )}/>
            {/* <Route path="/profile">
              <Profile name={123} />
            </Route> */}
            {/* <Route path="/profile/123" component={() => <h2>User ALex page</h2> }/> */}
            <Route path="/login" component={Login}/>
            {/* <Route exact path="/dialogs" component={Dialogs ({dialogs})}/> */}
            <Route exact path="/dialogs" component={() => (
              <DialogsItem name="Messages page" dialogs={props.dialogs} />
              )}/>
            {/* <Route exact path="/messages" component={Messages ({messages})}/> */}
            {/* <Route exact path="/messages" component={() => <h2>Messages</h2>}/> */}
          <Route exact path="/messages" component={() => (
          <Message name="Messagese page" message={props.message} />
          )}/>
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
