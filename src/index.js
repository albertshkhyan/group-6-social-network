import ReactDOM from 'react-dom';
import React from "react";

import App from './App.js';
// console.log('ReactDOM', ReactDOM);
import { BrowserRouter } from "react-router-dom";

import state from "./redux/state";

import { createStore, combineReducers } from "redux";
import profileReducer from './redux/profileReducer';
import dialogsReducer from './redux/dialogsReducer';
import MyContext from "./myContext";



window.state = state;

const combindRedc = combineReducers({
  profileReducer,
  dialogsReducer
});

const store = createStore(combindRedc);

function Provider(props){
return(
<MyContext.Provider value={props.store}>
{props.children}
</MyContext.Provider>
)
}


export function reRenderEntireTree(store) {
  debugger
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    ,
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