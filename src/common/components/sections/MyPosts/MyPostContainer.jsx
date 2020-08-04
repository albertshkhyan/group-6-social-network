import React from "react";

import {
  updateNewPostCreator,
  addPostCreator,
} from "../../../../redux/profileReducer";
import MyPosts from "./MyPosts";
// import MyConext from "../../../../myContext";
import { connect } from "react-redux";

//container comp - shpvuma redux-i het (orinak dipsatch a anum)
// const MyPostsContainer = (props) => {
//   return (
//     <MyConext.Consumer>
//       {(store) => {
//         const state = store.getState().profileReducer;
        // const updateNewPostText = (text) => {
        //   store.dispatch(updateNewPostCreator(text));
        // };
        // const addPost = () => {
        //   state.newPostText && store.dispatch(addPostCreator()); //problem - type-i masin anhagstanum enq
        // };
//         console.log("state", state);
//         return (
//           <MyPosts
//             newPostText={state.newPostText}
//             posts={state.posts}
//             addPost={addPost}
//             updateNewPostText={updateNewPostText}
//           />
//         );
//       }}
//     </MyConext.Consumer>
//   );
// };


const mapStateToProps = (state) => {//store.getState()
  console.log('state', state);
  return {
    newPostText : 10,
    posts : 10
    // addPost -> dispatch
    // updateNewPostText -> dispatch
  }
}
const mapDispatchToProps = (dispatch) => {
  console.log('dispatch', dispatch);
  return {
    addPost : () => {
      dispatch(addPostCreator()); //problem - type-i masin anhagstanum enq
    },
    updateNewPostText : (text) => {
      dispatch(updateNewPostCreator(text));
    }
  }
  
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;
