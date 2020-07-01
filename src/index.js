import ReactDOM from 'react-dom';
import React from "react";

import App, {x} from './App.js';
// console.log('ReactDOM', ReactDOM);
import { BrowserRouter } from "react-router-dom";


console.log('x', x);

const posts = [
  {id: "1",post : "new post"},
  {id: "2",post : "blablabla"},
  {id: "3",post : "blabla"},
  {id: "4",post : "It's my first posts"},
  {id: "5",post : "Hi, how are you?"},
] 
const dialogs  = [
  {id:"0",name:"Lyov"},
  {id:"1",name:"Valer"},
  {id:"2",name:"Artem"},
  {id:"3",name:"Aram"},
  {id:"4",name:"Vlo"},
  {id:"5",name:"Varuj"},
  {id:"6",name:"Arsen"},
  {id:"7",name:"Artak"},
  {id:"8",name:"Aram"},
  {id:"9",name:"Aren"},

];
const messages = [
  {id:"0", message: "Hello"},
  {id:"1", message: "Hi"},
  {id:"2", message: "Barev"},
  {id:"3", message: "Privet"},
  {id:"4", message: "Adios"},
  {id:"5", message: "Gutentag"},
  {id:"6", message: "Gabarjoba"},
  {id:"7", message: "Hola"},
  {id:"8", message: "Salut"},
  {id:"9", message: "Bari Hachoxun"},

]

ReactDOM.render(
  <BrowserRouter>
     <App posts={posts} />
  </BrowserRouter>,
  document.getElementById('root')
);


// function render() {
//   // return ...
// }
// render(Component, <div id="root"></div>)