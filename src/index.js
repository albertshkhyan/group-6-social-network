import ReactDOM from 'react-dom';
import React from "react";

import App from './App.js';

import { BrowserRouter } from "react-router-dom";
import state from "./redux/state";


ReactDOM.render(
  <BrowserRouter>
     <App state = {state}/>
  </BrowserRouter>,
  document.getElementById('root')
);
