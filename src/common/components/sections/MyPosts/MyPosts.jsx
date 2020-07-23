import React from "react";
import Post from "./Post";

import s from "./style.module.css";

import { updateNewPostCreator, addPostCreator } from "../../../../redux/profileReducer";

const MyPosts = (props) => {
  const postArrayComp = props.posts.map((item) => (
    <Post key={item.id} post={item.post} id={item.id} />
  ));

  const updateNewPostText = (event) => {
    let text = event.target.value;
    // props.dispatch({type: "UPDATE_NEW_POST_TEXT", newPostText : text });
    props.dispatch(updateNewPostCreator(text));
  };
  const addPost = () => {
    // props.newPostText && props.addPost();
    props.dispatch(addPostCreator());//problem - type-i masin anhagstanum enq

        /*
    props.dispatch(action) -> {type: "----"}
    props.dispatch( func() ) -> props.dispatch( {type} )
    
    */

  };

  return (
    <div className={s.MyPosts}>
      <h2>My posts</h2>
      <div>
        <textarea value={props.newPostText} onChange={updateNewPostText} />
      </div>
      <div>
        <button onClick={addPost}>Add post</button>
      </div>

      <div className={s.postsContainer}>{postArrayComp}</div>
    </div>
  );
};
export default MyPosts;
