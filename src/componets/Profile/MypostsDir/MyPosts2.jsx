import React from "react";
 import c from './MyPosts.module.css'
import Post from "./Post";


let postData = [
  {id: 1, message: 'Hello world!'},
  {id: 2, message: "its my first post"},
  {id: 1, message: 'WORLD WORK'},
  {id: 1, message: 'samurai way'},
  {id: 1, message: '101 movie'},
];

let postElements = postData
  .map(post => <Post Message={post.message}/>)


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
     { postElements }
     </div>
    
    </div>
    )
}

export default MyPost2;