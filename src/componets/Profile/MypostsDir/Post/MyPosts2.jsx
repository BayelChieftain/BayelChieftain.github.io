import React from "react";
// import c from './MyPosts.module.css'
import Post from "../Post";

const  MyPost2 = () => {
    return  <div>
    <div>
      my post
     </div>

     <div>
      <Post Message='Hello world!'/>
      <Post  Message='its my first post'/>
     </div>
    
    </div>
}

export default MyPost2;