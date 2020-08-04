import React from "react";

import DialogsItem from "./DialogsItem";
import Message from "../../sections/Message/Message";

import s from "./style.module.css";
import MyConext from "../../../../myContext";

///stexcel DialogsContainer -> vory kshpve  store- i het , Dialogs - y sarqel pure function
function Dialogs(props) {
    // debugger
    const dialogsArrayComp = props.dialogs.map(item => <DialogsItem key={item.id} name={item.name} id={item.id} />)
    const messagesArrayComp = props.messages.map(item => <Message key={item.id} message={item.message} id={item.id} />);
    return (
        <div className="Dialogs">
            <div className="flexible">
                <div className={s.dialogContainer}>
                    {dialogsArrayComp}
                </div>

                <div className={s.messagesContainer}>
                    {messagesArrayComp}
                </div>
            </div>
            <div>
                <textarea value={props.newMessageBody} onChange={props.newMessageBodyCB}/>
                <div>
                    <button onClick={props.addnewMessageBodyCB}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
