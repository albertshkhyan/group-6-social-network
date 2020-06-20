import ReactDOM from 'react-dom';
import React from "react";
import {BrowserRouter} from "react-router-dom";

import App, {x} from './App.js';
console.log('x', x);
// console.log('ReactDOM', ReactDOM);

ReactDOM.render(

  <BrowserRouter>
  <App />
  </BrowserRouter>,
  
  document.getElementById('root')
);


// function render() {
//   // return ...
// }
// render(Component, <div id="root"></div>)