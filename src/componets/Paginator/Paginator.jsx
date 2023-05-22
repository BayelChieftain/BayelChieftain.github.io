import React from "react";
import styles from './paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPages, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize) 
    let pages = [];
    
    for (let i=1; i <= pagesCount; i++) {pages.push(i)}

    return <div>
    {pages.map( p => {
       return <span className={currentPages === p && styles.selectedPage}
       
       onClick={ 
        (e) => {onPageChanged(p)} 
    }>{p}</span>
    
    })}
    </div>
};

export default Paginator;