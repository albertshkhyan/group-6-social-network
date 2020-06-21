import ReactDOM from 'react-dom';
import React from "react";

import App, {x} from './App.js';
// console.log('ReactDOM', ReactDOM);
import {BrowserRouter } from "react-router-dom";



console.log('x', x);

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