import React from "react";
import headCss from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = (props) => {
    
    return <header className={headCss.header}>
    <img src='https://assets.stickpng.com/images/61fc02743cf0e70004222074.png' />

    <div className={headCss.loginBlock}>
        { props.isAuth ? 
        <div>{props.login} - <button onClick={props.logout}>Log out</button></div>  
        : <NavLink to={'/login'} >LOGIN</NavLink> }
    </div>
    </header>

};

export default Header;