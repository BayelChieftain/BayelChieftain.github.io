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
 
    let dialogData = [
        {id: 1,name: "dimych"},
        {id: 2, name: "any"},
        {id: 3, name: "banan"},
        {id: 4, name: "bobrik"},
    ];

    let MessageData = [
        {id: 1, message: "boberrr"},
        {id: 2, message: "hi im roza"},
        {id: 3, message: "mimozochka"},
        {id: 4, message: "bobrik"},
    ];
 
    return (
    <div className={c.dialogs}>
        <div className={c.dialogsItems}>
            <DialogItem  name={dialogData[0].name} id={dialogData[0].id}/>

            <DialogItem  name={dialogData[1].name} id={dialogData[1].id}/>

            <DialogItem  name={dialogData[2].name} id={dialogData[2].id}/>

            <DialogItem  name={dialogData[3].name} id={dialogData[3].id}/>
                   
        </div>

        <div className={c.messages}>
            <Massages  massage={MessageData[0].message}/>
            <Massages  massage={MessageData[2].message}/>
            <Massages  massage={MessageData[3].message}/>
        </div>
    </div>
    )
};

export default Dialog;