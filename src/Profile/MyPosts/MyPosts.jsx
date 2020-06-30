import React from 'react';
import Post from './Post';

import s from"./style.module.css";




const posts = [
    {id:"0", post: "new post"},
    {id:"1", post: "blablabla"},
    {id:"2", post: "blabla"},
    {id:"3", post: "It's my first posts"},
    {id:"4", post: "Hi, how are you?"},
]

const MyPosts = (props) => {

    const postArrayComp = posts.map(item => <Post post={item.post} id={item.id}/>)

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