import React from "react";
import c from './DialogsItem.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    
    let path = "/dialog/" + props.id;
    
    return (
        <div className={c.dialog}>
               <NavLink to={path}> {props.name} </NavLink>
            </div>
    )

};

export default DialogItem;