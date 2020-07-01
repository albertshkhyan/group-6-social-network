import React from "react";


//my custom componnets
import DialogsItem from './DialogsItem';
import Message from "./Message/Message";

import s from "./style.module.css";


const dialogs = [
    { id: "1", name: "Valer" },
    { id: "2", name: "Janna" },
    { id: "3", name: "Lyov" },
    { id: "4", name: "Nara" },
    { id: "5", name: "Ruzan" },
    { id: "6", name: "Miqo" },
    { id: "7", name: "Alik" },
    { id: "8", name: "Consuela" },
    { id: "9", name: "Vigen" },
    { id: "10", name: "Armen" },
]

const messages = [
    { id: "1", message: "Hi" },
    { id: "2", message: "How are you?" },
    { id: "3", message: "bla bla" },
    { id: "4", message: "bla bla" },
    { id: "5", message: "bla bla" },
    { id: "6", message: "bla bla" },
    { id: "7", message: "bla bla" },
    { id: "8", message: "bla bla" },
]
function Dialogs(props) {


    const newDialogsArrayCompnts = dialogs.map(item => <DialogsItem name={item.name} id={item.id}  />  )
    // console.log('newDialogsArrayCompnts', newDialogsArrayCompnts);//
    return (
        <div className="Dialogs">
            {/* <Message /> */}
            <div className="flexible">
                <div className={s.dialogContainer}>
                    {/* {dialogs.map(item => <DialogsItem name={item.name} id={item.id} />)} */}
                    {newDialogsArrayCompnts}
                </div>

                <div className={s.messagesContainer}>
                    <Message message={messages[0].message} />
                    <Message message={messages[1].message} />
                    <Message message={messages[2].message} />
                    <Message message={messages[3].message} />
                    <Message message={messages[4].message} />
                    <Message message={messages[5].message} />
                    <Message message={messages[5].message} />
                    <Message message={messages[7].message} />
                </div>
            </div>

            <div>
                <textarea></textarea>
                <div>
                    <button>ADD MESSAGE</button>
                </div>
            </div>
        </div>
    )
}
//3
export default Dialogs;
