import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// импорт данных
import store from './componets/redux/reduxStore';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render(
    <HashRouter>
     <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
     </React.StrictMode>
    </HashRouter>
  );









