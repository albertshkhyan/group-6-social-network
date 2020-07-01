import React from 'react';

import s from './style.module.css';


const Post = (props) => {
    return (
        <div className="Post">
            <div className="flexible aEnd">
                <div className={s.imageContainer}>
                    <img src="https://www.sololearn.com/Icons/Avatars/4604247.jpg" alt=""/>
                </div>
                <div>
                    {props.post}
                </div>
            </div>
        </div>
    )
}
export default Post;