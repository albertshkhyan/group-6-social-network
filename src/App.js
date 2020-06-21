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
            <Route path="/login" component={Login}/>
            <Route path="/messages" component={Messages}/>
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
