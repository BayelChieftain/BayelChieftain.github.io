import React from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Navbar from './componets/Navbar/Navbar';
import Profile from './componets/Profile/MypostsDir/Post/Profile';



const App = () => {
  return (
    <div className='app-wrapper'>
      <Header/>

      <Navbar />
      
      <Profile />
    </div>
  );
}

export default App;
