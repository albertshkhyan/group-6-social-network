import React from "react";

import DialogsItem from "./DialogsItem";
import Message from "../../sections/Message/Message";

import s from "./style.module.css";
import MyConext from "../../../../myContext";

///stexcel DialogsContainer -> vory kshpve  store- i het , Dialogs - y sarqel pure function
function Dialogs(props) {
    return (
        <MyConext.Consumer>
            {(store) => {
                //side effect
                let state = store.getState().dialogsReducer;
                const dialogsArrayComp = state.dialogs.map(item => <DialogsItem key={item.id} name={item.name} id={item.id} />)
                const messagesArrayComp = state.messages.map(item => <Message key={item.id} message={item.message} id={item.id} />);

                return <div className="Dialogs">

                    <div className="flexible">
                        <div className={s.dialogContainer}>
                            {dialogsArrayComp}
                        </div>

                        <div className={s.messagesContainer}>
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
        </MyConext.Consumer>
    )
}

export default Dialogs;
