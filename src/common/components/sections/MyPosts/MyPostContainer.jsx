import React from "react";

import { updateNewPostCreator, addPostCreator } from "../../../../redux/profileReducer";
import MyPosts from './MyPosts';
import MyContext from '../../../../myContext';
// console.log('MyConext', MyConext);


//container comp - shpvuma redux-i het (orinak dipsatch a anum)
const MyPostsContainer = (props) => {
  return (
    <MyContext.Consumer>
      {(store) => {
        const state = store.getState().profileReducer;
    const updateNewPostText = (text) => {
        store.dispatch(updateNewPostCreator(text));
      };
    const addPost = () => {
    state.newPostText && store.dispatch(addPostCreator());//problem - type-i masin anhagstanum enq
    };
              return (
                 <MyPosts 
               newPostText={props.newPostText}
               posts={state.posts}  
               addPost = {addPost} 
               updateNewPostText={updateNewPostText}
               />
               )
        }}
      </MyContext.Consumer>
  );
};
export default MyPostsContainer;
