import ReactDOM from 'react-dom';
import React from "react";

import App from './App.js';
// console.log('ReactDOM', ReactDOM);
import { BrowserRouter } from "react-router-dom";

import state from "./redux/state";

import { createStore, combineReducers } from "redux";
import profileReducer from './redux/profileReducer';
import dialogsReducer from './redux/dialogsReducer';

window.state = state;

const combindRedc = combineReducers({
  profileReducer,
  dialogsReducer
});

const store = createStore(combindRedc);
console.log('store.getState()', store.getState());

export function reRenderEntireTree(store) {
  ReactDOM.render(
    <BrowserRouter>
      {/* <App
        state={state}
        dispatch={store.dispatch}    
      /> */}
        <App store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  );
}

store.subscribe(() => {
  // console.log(store.getState());
  console.log('store.getState()', store.getState());
  reRenderEntireTree(store);
})

reRenderEntireTree(store);






// function render() {
//   // return ...
// }
// render(Component, <div id="root"></div>)