import React from "react";

import "./style.css";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
} from "../../../../redux/usersReducer";

import * as axios from "axios";

//class component
//all class component must extend React.Component
class Users extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
    console.log(props.users);
    // if (this.props.users.length === 0) {//paymany karox enq chgrel qani vor contructori mej harcumy mi angam e texi unenum
      axios
        .get(
          "https://social-network.samuraijs.com/api/1.0/users?count=5&page=2"
        )
        .then((response) => {
          this.props.setUsers(response.data.items);
        });
    // }
  }

  followOnClick(id) {
    this.props.unfollow(id);
  }

  render() {
    return this.props.users.map((u) => {
      return (
        <div key={u.id} className="user-content">
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
            {u.followed ? (
              <button onClick={() => this.followOnClick(u.id)}>Follow</button>
            ) : (
              <button
                onClick={() => {
                  this.props.unfollow(u.id);
                }}
              >
                Unfollow
              </button>
            )}
          </div>
        </div>
      );
    });
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setUsers: (users) => dispatch(setUsersAC(users)),
    follow: (id) => dispatch(followAC(id)),
    unfollow: (id) => dispatch(unfollowAC(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
