import React from 'react';
import Post from './Post';

import s from"./style.module.css";
// console.log('s', s);


const posts = [
    {id: "1",post : "new post"},
    {id: "2",post : "blablabla"},
    {id: "3",post : "blabla"},
    {id: "4",post : "It's my first posts"},
    {id: "5",post : "Hi, how are you?"},
] 

const MyPosts = (props) => {
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
                <Post post={posts[0].post}/>
                <Post post={posts[1].post}/>
                <Post post={posts[2].post}/>
                <Post post={posts[3].post}/>
                <Post post={posts[4].post}/>
            </div>
        </div>
    )
}
export default MyPosts;