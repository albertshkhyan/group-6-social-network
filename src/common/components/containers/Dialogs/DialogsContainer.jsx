import React from "react";


import MyConext from "../../../../myContext";
import { addnewMessageBodyAC, newMessageBodyAC } from "../../../../redux/dialogsReducer";
import Dialogs from './Dialogs';

//container comp - shpvuma redux-i het (orinak dipsatch a anum)
const DialogsContainer = (props) => {
    // debugger
  return (
    <MyConext.Consumer>
      {(store) => {
        const state = store.getState().dialogsReducer;
        const newMessageBodyCB = (event) => {
            // debugger
          store.dispatch(newMessageBodyAC(event.target.value));
        };
        const addnewMessageBodyCB = () => {
            // debugger
          state.newMessageBody && store.dispatch(addnewMessageBodyAC()); //problem - type-i masin anhagstanum enq
        };
        return (
          <Dialogs
          dialogs = {state.dialogs}
          messages = {state.messages}
          newMessageBodyCB = {newMessageBodyCB}
          newMessageBody = {state.newMessageBody}
          addnewMessageBodyCB = {addnewMessageBodyCB}
          />
        );
      }}
    </MyConext.Consumer>
  );
};
export default DialogsContainer;
