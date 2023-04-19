import React from "react";
import c from './Post.module.css'

const  Post = (props) => {
    return (
      
      <div>
        <div className={c.item}>{props.Message}</div>
      </div>
      
      )
}

export default Post; 