import React from "react";

import "./style.css";


const Dashboard = (props) => {
  return (
    <div className="Dashboard">
        <nav>
            <ul>
                <li><a href="#Profile">Profile</a></li>
                <li><a href="#Login">Login</a></li>
                <li><a href="#Messages">Messages</a></li>
                <li><a href="#News">News</a></li>
                <li><a href="#Music">Music</a></li>
                <li><a href="#Settings">Settings</a></li>
                <li><a href="#Users">Users</a> </li>
            </ul>
        </nav>
    </div>
  );
};
export default Dashboard;
