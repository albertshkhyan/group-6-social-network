import React from "react";
import Post from "./Post";

import s from "./style.module.css";

const MyPosts = (props) => {
  const postArrayComp = props.posts.map(item => 
    <Post key={item.id} post={item.post} id={item.id} />)

    const foo = (event) => {

      let text = event.target.value; 

      props.updateNewPostText(text)
    };

    const bar = () => {
      props.addPost();
    }

  return (
    <div className={s.MyPosts}>
      <h2>My posts</h2>
      <div>
      
        <textarea value = {props.newPostText} onChange = {foo}/>
      </div>
      <div>
        <button onClick = {bar}>Add post</button>
      </div>

      <div className={s.postsContainer}>
        {postArrayComp}
      </div>
    </div>
  )
  }
export default MyPosts;
