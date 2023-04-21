import React from "react";
 import c from './MyPosts.module.css'
import Post from "./Post";

const  MyPost2 = () => {
  let postData = [
    {id: 1, message: 'Hello world!'},
    {id: 2, message: "its my first post"}
];
  
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
      <Post Message={postData[0].message}/>
      <Post  Message={postData[1].message} />
     </div>
    
    </div>
    )
}

export default MyPost2;