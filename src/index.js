import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogData = [
  {id: 1, name: "dimych"},
  {id: 2, name: "any"},
  {id: 3, name: "banan"},
  {id: 4, name: "bobrik"},
  {id: 5, name: "bayelPro"},
  {id: 6, name: "hitler"}
];

let messagesData = [
  {id: 1, message: "boberrr"},
  {id: 2, message: "hi im roza"},
  {id: 3, message: "mimozochka"},
  {id: 4, message: "bobrik"},
  {id: 5, message: "bayel crossavchik"} 
];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogData={dialogData} messagesData={messagesData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
