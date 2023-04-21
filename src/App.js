import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialog from './componets/Dialogs/Dialogs';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import Setting from './componets/Setting/Setting';
import News from './componets/News/News';
import Music from './componets/Music/Music';


const App = () => {
  return (
    <BrowserRouter>
    <div className='app-wrapper'>
      
      <Header/>

      <Navbar />
      
      <div className='app-wrapper-content'> 
      <Routes>
      <Route path='/dialog' element={<Dialog />}/>
      <Route path='/profile' element={<Profile />}/> 
      <Route path='/news' element={<News />}/> 
      <Route path='/music' element={<Music />}/> 
      <Route path='/settings' element={<Setting />}/> 
      </Routes>
      
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

