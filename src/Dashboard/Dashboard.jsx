import React from "react";

import "./style.css";

import {
  // Link,
  NavLink
} from "react-router-dom";


const Dashboard = (props) => {
  return (
    <div className="Dashboard">
        <nav>
            <ul>
                <li><NavLink activeClassName="menuColor" to="/profile">Profile</NavLink></li>
                <li><NavLink activeClassName="menuColor" to="/login">Login</NavLink></li>
                <li><NavLink activeClassName="menuColor" to="/dialogs">Messages</NavLink></li>
                <li><NavLink activeClassName="menuColor" to="/news">News</NavLink></li>
                <li><NavLink activeClassName="menuColor" to="/music">Music</NavLink></li>
                <li><NavLink activeClassName="menuColor" to="/settings">Settings</NavLink></li>
                <li><NavLink activeClassName="menuColor" to="/users">Users</NavLink></li>
            </ul>
        </nav>
    </div>
  );
};
export default Dashboard;
