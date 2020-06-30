import React from "react";

import DialogsItem from "./DialogsItem";
import Message from "./Message/Message";

import s from "./style.module.css";

const dialogs  = [
    {id:"0",name:"Lyov"},
    {id:"1",name:"Valer"},
    {id:"2",name:"Artem"},
    {id:"3",name:"Aram"},
    {id:"4",name:"Vlo"},
    {id:"5",name:"Varuj"},
    {id:"6",name:"Arsen"},
    {id:"7",name:"Artak"},
    {id:"8",name:"Aram"},
    {id:"9",name:"Aren"},

];

const messages = [
    {id:"0", message: "Hello"},
    {id:"1", message: "Hi"},
    {id:"2", message: "Barev"},
    {id:"3", message: "Privet"},
    {id:"4", message: "Adios"},
    {id:"5", message: "Gutentag"},
    {id:"6", message: "Gabarjoba"},
    {id:"7", message: "Hola"},
    {id:"8", message: "Salut"},
    {id:"9", message: "Bari Hachoxun"},

]

function Dialogs(props) {
    
    const dialogsArrayComp = dialogs.map(item => <DialogsItem name={item.name} id={item.id}/>)
    const messagesArrayComp = messages.map(item => <Message message={item.message} id={item.id}/>)
    return (
        <div className="Dialogs">
           
          <div className = "flexible">
                <div className= {s.dialogContainer}>
                   {dialogsArrayComp}
                </div>

                <div className= {s.messagesContainer}>
                    {messagesArrayComp}
                </div>
            </div>
            <div>
                <textarea></textarea>
                <div>
                    <button>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
