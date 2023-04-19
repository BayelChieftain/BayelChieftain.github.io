import React from "react";
import c from './MyPosts.module.css'
import Post from "../Post";

const  MyPost2 = () => {
    return  <div className={c.content}>
    <div>
      my post
     </div>

     <div>
      <Post />
     </div>
    
    </div>
}

export default MyPost2;