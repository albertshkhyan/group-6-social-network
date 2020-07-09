import ReactDOM from 'react-dom';
import React from "react";

import App from './App.js';
// console.log('ReactDOM', ReactDOM);
import { BrowserRouter } from "react-router-dom";
import state, {addPost} from "./redux/state";
// console.log('state', state);


window.state = state;

ReactDOM.render(
  <BrowserRouter>
    <App state={state} addPost={addPost}/>
  </BrowserRouter>,
  document.getElementById('root')
  );


// function render() {
//   // return ...
// }
// render(Component, <div id="root"></div>)