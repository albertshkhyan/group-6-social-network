import React from "react";

import "./style.css";
import { connect } from "react-redux";

const Users = (props) => {
  console.log("props", props);
  return (
    <div className="Users">
      <h2>Users</h2>
      <div className="users-container">
        {props.users.map((u) => {
          return (
            <div className="user-content">
              <div className="image-container">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/User_icon-cp.svg/1200px-User_icon-cp.svg.png"
                  alt=""
                />
              </div>

              <div className="user-info">
                <span>{u.name}</span>
              </div>

              <div className="follow_or_unfollow-container flexible jCenter">
                {
                  u.followed ? <button>Follow</button> : <button>Unfollow</button>
                }
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapSateToProps = (state) => {
  return {
    users: state.usersReducer.users,
  };
};

// const 
const UserContainer = connect(mapSateToProps, mapDispatchToProps)(Users);
export default UserContainer;
