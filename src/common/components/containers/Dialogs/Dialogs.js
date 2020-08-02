import React from "react";

import DialogsItem from "./DialogsItem";
import Message from "../../sections/Message/Message";
import MyContext from "../../../../myContext";

import s from "./style.module.css";



function Dialogs(props) {
     
    return (
        <MyContext.Consumer>
       {(store)=>{
           let state = store.getState().dialogsReducer;
            const dialogsArrayComp = state.dialogs.map(item => <DialogsItem key={item.id} name={item.name} id={item.id}/>)
            const messagesArrayComp = state.messages.map(item => <Message key={item.id} message={item.message} id={item.id}/>)

            return <div className="Dialogs">
           
            <div className = "flexible">
                  <div className= {s.dialogContainer}>
                     {dialogsArrayComp}
                  </div>
  
                  <div className= {s.messagesContainer}>
                      {messagesArrayComp}
                  </div>
              </div>
              <div>
       <textarea>{state.newMessageBody}</textarea>
                  <div>
                      <button>Add Message</button>
                  </div>
              </div>
          </div>  
       }}
        </MyContext.Consumer>
    )
}

export default Dialogs;
