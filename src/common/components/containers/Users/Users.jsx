import React from "react";

import "./style.css";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setTotalCountAC,
} from "../../../../redux/usersReducer";

import * as axios from "axios";

//class component
//all class component must extend React.Component
class Users extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
    console.log(props.users);
  }

  componentDidMount() {
    if (this.props.users.length === 0) {
      axios
        .get(
          "https://social-network.samuraijs.com/api/1.0/users?count=5&page=2"
        )
        .then((response) => {
          this.props.setTotalCount(response.data.totalCount);
          this.props.setUsers(response.data.items);
        });
    }
  }

  followOnClick(id) {
    this.props.unfollow(id);
  }

  render() {
    return (
      <div>
        {/* pagination */}
        {[1, 2, 3, 4].map((item) => {
          return <span>{item}</span>;
        })}
        {/* users */}
        {this.props.users.map((u) => {
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
                  <button onClick={() => this.followOnClick(u.id)}>
                    Follow
                  </button>
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
        })}
      </div>
    );
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
    setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
