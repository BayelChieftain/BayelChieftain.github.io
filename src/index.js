
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// импорт данных
import store from './componets/redux/state';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
 let renderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
     <React.StrictMode>
       <App state={store.getState()} 
       dispatch={store.dispatch.bind(store)} 
         />
     </React.StrictMode>
    </BrowserRouter>
  );
};

renderEntireTree(store.getState())
store.subscribe(renderEntireTree)







