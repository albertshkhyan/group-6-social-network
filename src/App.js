import React from "react";
import Header from "./Header/Header";
import "./App.css";//👍
import "./media.css";
import Dashboard from './Dashboard/Dashboard';
import Profile from "./Profile/Profile";


function App(props) {
  return (
    <div className="App">
      <Header />

      <div className="flexible">
        <Dashboard />
        {/* <Dialogs /> */}
        <main className="main">
        <Profile />
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
export default App ;
