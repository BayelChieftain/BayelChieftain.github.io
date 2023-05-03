
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// импорт данных
import store from './componets/redux/reduxStore';
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));
 let renderEntireTree = (state) => {
  root.render(
    <BrowserRouter>
     <React.StrictMode>
       <App state={state} 
       dispatch={store.dispatch.bind(store)}  
       store={store}/>
     </React.StrictMode>
    </BrowserRouter>
  );
};

renderEntireTree(store.getState())
store.subscribe(() => {
  let state = store.getState();
  renderEntireTree(state);
})







