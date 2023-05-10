import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';

import { Routes, Route } from "react-router-dom";
import Setting from './componets/Setting/Setting';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import DialogContainer from './componets/Dialogs/DialogsContainer';
import UsersContainer from './componets/Users/UsersContainer';
import ProfileContainer from './componets/Profile/ProfileContainer';


const App = (props) => {
  return (
    
    <div className='app-wrapper'>
      
      <Header/>

      <Navbar />
      
      <div className='app-wrapper-content'> 
      <Routes>
        <Route path='/dialog' element={
        <DialogContainer store={props.store} />}  />
        
        
          <Route path='/profile/*' element={
          <ProfileContainer 
            store={props.store}
          
           />}/> 

            <Route path='/users' element={ <UsersContainer /> }/> 


            <Route path='/news' element={<News />}/> 
          <Route path='/music' element={<Music />}/> 
        <Route path='/settings' element={<Setting />}/> 
      </Routes>
      
      </div>
      
    </div>
    
  );
}

export default App;

