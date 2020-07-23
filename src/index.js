import ReactDOM from 'react-dom';
import React from "react";

import App from './App.js';
// console.log('ReactDOM', ReactDOM);
import { BrowserRouter } from "react-router-dom";

import state from "./redux/state";

import { createStore } from "redux";
import profileReducer from './redux/profileReducer';

window.state = state;

const store = createStore(profileReducer);


export function reRenderEntireTree(state) {
  debugger
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        dispatch={store.dispatch}
      />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

store.subscribe(() => {
  // console.log(store.getState());
  console.log('store.getState()', store.getState());
  reRenderEntireTree(store.getState())
})

reRenderEntireTree(store.getState());






// function render() {
//   // return ...
// }
// render(Component, <div id="root"></div>)