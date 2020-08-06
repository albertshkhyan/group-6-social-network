import ReactDOM from 'react-dom';
import React from "react";

import App from './App.js';
// console.log('ReactDOM', ReactDOM);
import { BrowserRouter } from "react-router-dom";

import {Provider} from "react-redux";
import store from "./store/index";


// import MyConext from "./myContext";





// console.log('store', store);


// function Provider(props) {
//   return (
//     <MyConext.Provider value={props.store}>
//         {props.children} {/*  <App /> */}
//     </MyConext.Provider>
//   )
// }

// export function reRenderEntireTree(store) {  
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
    ,
    document.getElementById('root')
  );

window.state = store.getState();
store.subscribe(() => {
  window.state = store.getState();
});

