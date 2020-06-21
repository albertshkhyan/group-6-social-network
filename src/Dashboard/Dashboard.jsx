import React from "react";

import "./style.css";

import {
  // Link,
  NavLink,
} from "react-router-dom";

const Dashboard = (props) => {
  return (
    <div className="Dashboard">
      <nav>
        <ul>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/profile"
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              activeStyle={{
                fontWeight: "bold",
                color: "blue",
              }}
              to="/login"
            >
              Login
            </NavLink>
          </li>
          <li>
            <a href="#Messages">Messages</a>
          </li>
          <li>
            <a href="#News">News</a>
          </li>
          <li>
            <a href="#Music">Music</a>
          </li>
          <li>
            <a href="#Settings">Settings</a>
          </li>
          <li>
            <a href="#Users">Users</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Dashboard;
