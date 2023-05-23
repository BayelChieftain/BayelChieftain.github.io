import React, { useState } from "react";
import styles from './paginator.module.css';

let Paginator = ({totalItemsCount, pageSize, currentPages, onPageChanged, potrionSize = 15}) => {
    let pagesCount = Math.ceil(totalItemsCount / pageSize) 
    let pages = [];
    
    for (let i=1; i <= pagesCount; i++) pages.push(i);

    let portionCount = Math.ceil(pagesCount / potrionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortoinPageNumber = (portionNumber - 1) * potrionSize + 1;
    let rightPortoinPageNumber = portionNumber * potrionSize;

    return <div>
    {portionNumber > 1 &&
    <button onClick={ () => {setPortionNumber(portionNumber - 1)}} >Left</button>
    }
   { pages
   .filter(p => p >= leftPortoinPageNumber && p <= rightPortoinPageNumber)
   .map( p => {
       return <span className={currentPages === p && styles.selectedPage}
       
       onClick={ 
        (e) => {onPageChanged(p)}}>{p}</span>
    
    }) };
    {
        portionCount > portionNumber && 
        <button onClick={ () => {setPortionNumber(portionNumber + 1)}}>right</button>
    };
    </div>
};

export default Paginator;