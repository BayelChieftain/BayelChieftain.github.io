import React from "react";
import headCss from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    
    return <header className={headCss.header}>
    <img src='https://assets.stickpng.com/images/61fc02743cf0e70004222074.png' />

    <div className={headCss.loginBlock}>
        { props.isAuth ? 
        <div className={headCss.logoutBox}> {props.login} - <button className={headCss.buttonLogout} onClick={props.logout}>Log out</button></div>  
        : <div className={headCss.login}><NavLink to={'/login'} >LOGIN</NavLink></div> }
    </div>
    </header>

};

export default Header;