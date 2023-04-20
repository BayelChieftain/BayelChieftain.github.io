import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/MypostsDir/Post/Profile';
import Dialog from './componets/Dialogs/Dialogs';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>

      <Navbar />
      
      <div className='app-wrapper-content'> 
      <Dialog />
      <Profile />
      </div>
      {/* <Profile /> */}
    </div>
  );
}

export default App;

