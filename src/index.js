import ReactDOM from 'react-dom';
import React from "react";

import App, {x} from './App.js';
console.log('x', x);
// console.log('ReactDOM', ReactDOM);

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


// function render() {
//   // return ...
// }
// render(Component, <div id="root"></div>)