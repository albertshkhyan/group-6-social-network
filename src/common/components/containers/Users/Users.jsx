import React from "react";

import "./style.css";
import { connect } from "react-redux";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setTotalCountAC,
  setCurrentPage,
} from "../../../../redux/usersReducer";

import {isFetchingAC} from "../../../../redux/appReducer"

import * as axios from "axios";
import Preloader from "./../../../sections/Preloader./Preloader";

//class component
//all class component must extend React.Component
console.log('isFetchingAC', isFetchingAC);

class Users extends React.Component {
  constructor(props) {
    super(props);
    console.log("hello");
    console.log(props.users);
  }

  getUsers = (currentPage) => {
    if (this.props.users.length === 0) {
      this.props.isFetchingAC(true);//
      axios
        .get(
          // `ttps://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${currentPage}`
          // `https://api.github.com/users`
          `https://reqres.in/api/users?page=2`
        )
        .then((response) => {
          this.props.isFetchingAC(false);//
          console.log("response", response.data);
          this.props.setTotalCountAC(response.data.totalCount);
          this.props.setUsersAC(response.data);
        });
    }
  };

  componentDidMount() {
    this.getUsers(this.props.currentPage);
  }

  followOnClick(id) {
    this.props.unfollowAC(id);
  }

  changeCurrentPage = (currentPage) => {
    this.props.setCurrentPage(currentPage);
    this.getUsers(currentPage);
  };

  render() {
    // console.log("kokokkokokok");
    const limitOfPages = [];
    const totalCountOfPage = this.props.totalCount / this.props.pageSize; //3000 / 5 = 600 - ynhanur unenq 600 hat ej
    for (let i = 1; i <= totalCountOfPage; ++i) {
      limitOfPages.push(i);
    }
    // console.log('limitOfPages', limitOfPages);
    // Array(10).fill().map((_, i) => i+1);

    return (
      <div>
        {/*start-  pagination - extract this component to  Pagiantion.jsx */}
        {limitOfPages.map((item) => {
          return (
            <span
              onClick={() => this.changeCurrentPage(item)}
              key={item}
              className={
                item === this.props.currenPage ? "active-page" : "page"
              }
            >
              {item}
            </span>
          );
        })}
        {/*end -  pagination */}

        {/* users */}

        {this.props.isFetching ? (
          <Preloader />
        ) : (
          this.props.users.map((u) => {
            // console.log('u', u);
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
                        this.props.unfollowAC(u.id);
                      }}
                    >
                      Unfollow
                    </button>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersReducer.users,
    pageSize: state.usersReducer.pageSize,
    totalCount: state.usersReducer.totalCount,
    currenPage: state.usersReducer.currenPage,
    isFetching: state.appReducer.isFetching,
  };
};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     follow: (id) => dispatch(followAC(id)),
//     unfollow: (id) => dispatch(unfollowAC(id)),
//     setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
//   };
// };

// const mapDispatchToProps = {
//   setUsersAC, //setUsers: (users) => dispatch(setUsersAC(users)),
//   followAC,
//   unfollowAC,
//   totalCount,
// };

export default connect(mapStateToProps, {
  setUsersAC,
  followAC,
  unfollowAC,
  setTotalCountAC,
  isFetchingAC,
  setCurrentPage,
})(Users);
