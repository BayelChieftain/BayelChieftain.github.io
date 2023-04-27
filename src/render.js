import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// импорт данных
import { addPost } from './componets/redux/state';
import { updateNewPostText } from './componets/redux/state';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
export let renderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
     <React.StrictMode>
       <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
     </React.StrictMode>
    </BrowserRouter>
  );
}


