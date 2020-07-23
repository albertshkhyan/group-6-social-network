import React from "react";
import Post from "./Post";

import s from "./style.module.css";

const MyPosts = (props) => {
  debugger
  const postArrayComp = props.posts.map((item) => (
    <Post key={item.id} post={item.post} id={item.id} />
  ));

  const updateNewPostText = (event) => {
    let text = event.target.value;
    console.log('text', text);
    // props.updateNewPostText(text);
    props.dispatch({type: "UPDATE_NEW_POST_TEXT", x : text});
  };
  const addPost = () => {
    props.newPostText && props.addPost();

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
