import ReactDOM from 'react-dom';
import React from "react";

import App from './App.js';
// console.log('ReactDOM', ReactDOM);
import { BrowserRouter } from "react-router-dom";
import state from "./redux/state";
// console.log('state', state);

window.state = state; 

export function reRenderEntireTree(state){
 
ReactDOM.render(
  <BrowserRouter>
    <App 
    state={state} 
    addPost ={state.addPost.bind(state)} 
    updateNewPostText= {state.updateNewPostText.bind(state) } 
    />
  </BrowserRouter>,
  document.getElementById('root')
);
}
reRenderEntireTree(state);
// }
// render(Component, <div id="root"></div>)