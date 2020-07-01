import React from 'react';
import {NavLink} from 'react-router-dom';


const DialogsItem = (props) => {
    return (
        <div>
            <span>
                <NavLink to={`/dialogs/${props.id}`}>
                    {props.name}
                </NavLink>
            </span>
        </div>
    )
}

export default DialogsItem;