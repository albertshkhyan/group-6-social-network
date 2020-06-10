import React from "react";

import "./App.css";//👍
import "./media.css";


import Dialogs from "./Dialogs/Dialogs";


// function Header(props) {
//   return (
//     <header className="Header">
//       <img src="" alt="" />
//       <ul>
//         <li><a href="#s"></a></li>
//         <li><a href="#s"></a></li>
//         <li><a href="#s"></a></li>
//         <li><a href="#s"></a></li>
//         <li><a href="#s"></a></li>
//       </ul>
//     </header>)
// }

function App(props) {
  return (
    <div className="App">
      {/* <Header>Hello</Header> */}
      {/* <Header /> */}
      {/* <main></main> */}
      {/* <footer></footer> */}
      <Dialogs />
    </div>
  )
}
export const x = 10;
export default App ;
