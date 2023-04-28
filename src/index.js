
import state from './componets/redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// импорт данных
import { addPost, updateNewPostText, subscribe } from './componets/redux/state';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
 let renderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
     <React.StrictMode>
       <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
     </React.StrictMode>
    </BrowserRouter>
  );
};

renderEntireTree(state)
subscribe(renderEntireTree)







