import React from "react";
import userPhoto from '../../assts/img/interact.png';
import styles from './Users.module.css';
import { NavLink } from "react-router-dom";

let User = ({user, followingProgres, unfollow, follow}) => {
    return (
         <div className={styles.userB}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small != null ?  user.photos.small : userPhoto} className={styles.userPhoto} />
                    </NavLink>
                </div>
                <div>
                    
                    { user.followed 
                    ? <button disabled={followingProgres.some( id => id === user.id)}
                     onClick={ () => {
                        unfollow(user.id)
                       
                        }} >Unfollow</button> 
                    
                    : <button disabled={followingProgres.some( id => id === user.id)}  
                    onClick={ () => { follow(user.id) }}>Follow</button>}
                </div>
            </span>
                <span>
                    <span>
                        <div>Nickname: {user.name}</div>
                    </span>
                </span>
        </div> 
    
    )};

export default User;