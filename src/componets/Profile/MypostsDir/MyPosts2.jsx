import React from "react";
 import c from './MyPosts.module.css'
import Post from "./Post";


const  MyPost2 = (props) => {

  let postElements = props.postData
  .map(post => <Post Message={post.message}/>);

  let newPostElement = React.createRef();
  
  let addPost = () => {
    let text = newPostElement.current.value;
    props.dispatch({type: 'ADD-POST'});
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text}
    props.dispatch(action);
   // console.log(text)
  }

  return (
       <div className={c.PostBlock}>
        
        <h2>My post</h2>
        <div>
          <div>
            <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText } />
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