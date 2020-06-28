//1
import React from 'react';

import "./style.css";
import ProfileInfo from './ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

//2
function Profile(props) {
    return <div className="Profile">
        <ProfileInfo />
        <MyPosts />
        
        
    </div>
}
export const t = 10;
//3
export default Profile;