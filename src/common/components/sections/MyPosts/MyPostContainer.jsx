import React from "react";

import { updateNewPostCreator, addPostCreator } from "../../../../redux/profileReducer";
import MyPosts from './MyPosts';
import MyConext from '../../../../myContext';
console.log('MyConext', MyConext);


//container comp - shpvuma redux-i het (orinak dipsatch a anum)
const MyPostsContainer = (props) => {
    const updateNewPostText = (text) => {
        props.dispatch(updateNewPostCreator(text));
      };
    const addPost = () => {
    props.newPostText && props.dispatch(addPostCreator());//problem - type-i masin anhagstanum enq
    };

  return (
    <MyConext.Consumer>
      {(store) => {
        debugger
               return (
                 <MyPosts 
               newPostText={props.newPostText}
               posts={props.posts}  
               addPost = {addPost} 
               updateNewPostText={updateNewPostText}
               />
               )
        }}
      </MyConext.Consumer>
  );
};
export default MyPostsContainer;
