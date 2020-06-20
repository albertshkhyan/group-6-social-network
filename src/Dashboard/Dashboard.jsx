import React from "react";

import "./style.css";

import {
  // Link
  NavLink
} from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div className="Dashboard">
        <nav>
            <ul>
                <li><NavLink activeClassName="barColors" to="/profile">Profile</NavLink></li>
                <li><NavLink activeClassName="barColors" to="/login">Login</NavLink></li>
                <li><NavLink activeClassName="barColors" to="/messages">Messages</NavLink></li>
                <li><NavLink activeClassName="barColors" to="/news">News</NavLink></li>
                <li><NavLink activeClassName="barColors" to="/music">Music</NavLink></li>
                <li><NavLink activeClassName="barColors" to="/settings">Settings</NavLink></li>
                <li><NavLink activeClassName="barColors" to="/users">Users</NavLink></li>
            </ul>
        </nav>
    </div>
  );
};
export default Dashboard;
