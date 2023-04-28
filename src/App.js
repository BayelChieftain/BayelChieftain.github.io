import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/Profile';
import Dialog from './componets/Dialogs/Dialogs';

import { Routes, Route } from "react-router-dom";
import Setting from './componets/Setting/Setting';
import News from './componets/News/News';
import Music from './componets/Music/Music';


const App = (props) => {
  return (
    
    <div className='app-wrapper'>
      
      <Header/>

      <Navbar />
      
      <div className='app-wrapper-content'> 
      <Routes>
        <Route path='/dialog' element={<Dialog 
        dialogData={props.state.messagesPages.dialogData} 
        messagesData={props.state.messagesPages.messagesData} 
        newPostMessage={props.state.profilePages.newPostMessage}
        updateNewPostText={props.updateNewPostText} />}/>
        
        
          <Route path='/profile' element={<Profile 
          postData={props.state.profilePages.postData} 
          addPost={props.addPost} 
          
          profilePages={props.state.profilePages}
          
          updateNewPostText={props.updateNewPostText} />}/> 
            <Route path='/news' element={<News />}/> 
          <Route path='/music' element={<Music />}/> 
        <Route path='/settings' element={<Setting />}/> 
      </Routes>
      
      </div>
      
    </div>
    
  );
}

export default App;

