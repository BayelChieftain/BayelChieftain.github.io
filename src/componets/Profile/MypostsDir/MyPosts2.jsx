import React from "react";
 import c from './MyPosts.module.css'
import Post from "./Post";

const  MyPost2 = () => {
    return (
       <div className={c.PostBlock}>
        
        <h2>My post</h2>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <div>
            <button>Add post</button>
          </div>
        </div>

     <div className={c.posts}>
      <Post Message='Hello world!'/>
      <Post  Message='its my first post'/>
     </div>
    
    </div>
    )
}

export default MyPost2;