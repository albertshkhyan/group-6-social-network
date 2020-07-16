import ReactDOM from 'react-dom';
import React from "react";

import App from './App.js';
// console.log('ReactDOM', ReactDOM);
import { BrowserRouter } from "react-router-dom";

import state from "./redux/state";

import { createStore } from "redux";

window.state = state;

const myState = {
  profilePage: {
    posts: [
      { id: "1", post: "new post" },
      { id: "2", post: "blablabla" },
      { id: "3", post: "blabla" },
      { id: "4", post: "It's my first posts" },
      { id: "5", post: "Hi, how are you?" },

    ],
    newPostText: "",
  },
  dialogsPage: {
    messages: [
      { id: "1", message: "Hello" },
      { id: "2", message: "Hi" },
      { id: "3", message: "Barev" },
      { id: "4", message: "Privet" },
      { id: "5", message: "Adios" },
      { id: "6", message: "Gutentag" },
      { id: "7", message: "Gabarjoba" },
      { id: "8", message: "Hola" },
      { id: "9", message: "Salut" },
      { id: "10", message: "Bari Hachoxun" },

    ],
    dialogs: [
      { id: "1", name: "Lyov" },
      { id: "2", name: "Valer" },
      { id: "3", name: "Artem" },
      { id: "4", name: "Aram" },
      { id: "5", name: "Vlo" },
      { id: "6", name: "Varuj" },
      { id: "7", name: "Arsen" },
      { id: "8", name: "Artak" },
      { id: "9", name: "Aram" },
      { id: "10", name: "Aren" },

    ]
  },
}
const reducer = (state = myState, action) => {
  // debugger;
  if (action.type === "ADD_POST") {
    return {
      ...state,
      posts: [...state.profilePage.posts, {
        id: 1,
        post: this.profilePage.newPostText
      }]
    }
  }
  else if (action.type === "UPDATE_NEW_POST_TEXT") {
    return {
      ...state,
      profilePage: {
        posts : state.profilePage.posts,
        newPostText: action.x
      }
    }
  }
  else {
    return state;
  }
}

const store = createStore(reducer);


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