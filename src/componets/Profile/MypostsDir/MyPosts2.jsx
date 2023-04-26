import React from "react";
 import c from './MyPosts.module.css'
import Post from "./Post";


// let postData = [
//   {id: 1, message: 'Hello world!'},
//   {id: 2, message: "its my first post"},
//   {id: 1, message: 'WORLD WORK'},
//   {id: 1, message: 'samurai way'},
//   {id: 1, message: '101 movie'},
// ];




const  MyPost2 = (props) => {

  let postElements = props.postData
  .map(post => <Post Message={post.message}/>);

  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;

    alert(text);
  }

  return (
       <div className={c.PostBlock}>
        
        <h2>My post</h2>
        <div>
          <div>
            <textarea ref={ newPostElement }></textarea>
          </div>
          <div>
            <button onClick={ addPost }>Add post</button>
          </div>
        </div>

     <div className={c.posts}>
     { postElements }
     </div>
    
    </div>
    )
}

export default MyPost2;