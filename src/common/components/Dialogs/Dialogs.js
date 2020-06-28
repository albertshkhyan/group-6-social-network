//1
import React from "react";
import Message from "./Message/Message";

import "./style.css";
// import "./App.css";//❌

//2
function Dialogs(props) {
    return (
        <div className="Dialogs">
            <Message />
        </div>
    )
}
//3
export default Dialogs;
