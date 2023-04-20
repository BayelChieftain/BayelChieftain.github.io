import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/MypostsDir/Post/Profile';
import Dialog from './componets/Dialogs/Dialogs';

import {BrowserRouter, Routes, Route} from "react-router-dom";


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
      </Routes>
      
      </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;

