import ReactDOM from 'react-dom';
import React from "react";

import App from './App.js';
// console.log('ReactDOM', ReactDOM);
import { BrowserRouter } from "react-router-dom";
import state, {addPost, updateNewPostText} from "./redux/state";
// console.log('state', state); 


window.state = state;

export function reRenderEntireTree(state) {

  ReactDOM.render(
    <BrowserRouter>
    <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
  </BrowserRouter>,
  document.getElementById('root')
  );
}
reRenderEntireTree(state)

// function render() {
//   // return ...
// }
// render(Component, <div id="root"></div>)