import React from 'react';
import Post from './Post';

import s from"./style.module.css";


const MyPosts = (props) => {
    const postArrayComp = props.posts.map(item => <Post key={item.id} post={item.post} id={item.id}/>)
    // const postArrayComp = posts.map(item => <div key={item.id}>hello</div>)

    return (
        <div className={s.MyPosts}>
            <h2>My posts</h2>
            <div>
                <textarea />
            </div>
            <div>
                <button>Add post</button>
            </div>
 
            <div className={s.postsContainer}>
                {postArrayComp}
            </div>
        </div>
    )
}
export default MyPosts;