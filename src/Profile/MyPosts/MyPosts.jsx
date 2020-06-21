import React from 'react';
import Post from './Post';

import s from"./style.module.css";
console.log('s', s);

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
                <Post post="new post"/>
                <Post post="blablabla"/>
                <Post post="blabla"/>
                <Post post="It's my first posts"/>
                <Post post="Hi, how are you?"/>
            </div>
        </div>
    )
}
export default MyPosts;