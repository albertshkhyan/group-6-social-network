import React from "react";

import {
  updateNewPostCreator,
  addPostCreator,
} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import MyConext from "../../../../myContext";

//container comp - shpvuma redux-i het (orinak dipsatch a anum)
const MyPostsContainer = (props) => {
  return (
    <MyConext.Consumer>
      {(store) => {
        const state = store.getState().profileReducer;
        const updateNewPostText = (text) => {
          store.dispatch(updateNewPostCreator(text));
        };
        const addPost = () => {
          state.newPostText && store.dispatch(addPostCreator()); //problem - type-i masin anhagstanum enq
        };
        console.log("state", state);
        return (
          <MyPosts
            newPostText={state.newPostText}
            posts={state.posts}
            addPost={addPost}
            updateNewPostText={updateNewPostText}
          />
        );
      }}
    </MyConext.Consumer>
  );
};
export default MyPostsContainer;
