//1
import React from "react";

import "./style.css";
import ProfileInfo from "./ProfileInfo";
import MyPostsContainer from './../../sections/MyPosts/MyPostContainer';

//2

function Profile(props) {
  // debugger
  return (
    <div className="Profile">
      <ProfileInfo />
      <MyPostsContainer  
        // newPostText={props.newPostText}
        // posts={props.posts}
        // dispatch = {props.dispatch} 
        />
    </div>
  );
}
export default Profile;
