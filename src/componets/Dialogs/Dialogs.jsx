import React from "react";
import c from './Dialogs.module.css'
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
    
    let path = "/dialog/" + props.id;
    
    return (
        <div className={c.dialog}>
               <NavLink to={path}> {props.name} </NavLink>
            </div>
    )

};

const Massages = (props) => {
    return (
        <div className={c.message}>{props.massage}</div>
    )
};

const Dialog = (props) => {
    return (
    <div className={c.dialogs}>
        <div className={c.dialogsItems}>
            <DialogItem  name='dimych' id='1'/>

            <DialogItem  name='any' id='2'/>

            <DialogItem  name='banan' id='3'/>

            <DialogItem  name='bobrik' id='4'/>
                   
        </div>

        <div className={c.messages}>
            <Massages  massage="hi"/>
            <Massages  massage="samurai way"/>
            <Massages  massage="lets go to bajaj bulsar ns125"/>
        </div>
    </div>
    )
};

export default Dialog;