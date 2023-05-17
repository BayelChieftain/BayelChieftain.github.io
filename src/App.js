import React from 'react';
import './App.css';
import Navbar from './componets/Navbar/Navbar';

import { Routes, Route } from "react-router-dom";
import Setting from './componets/Setting/Setting';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import DialogContainer from './componets/Dialogs/DialogsContainer';
import UsersContainer from './componets/Users/UsersContainer';
import ProfileContainer from './componets/Profile/ProfileContainer';
import HeaderContainer from './componets/Header/HeaderContainer';
import Login from './componets/Login/Login';
import { connect } from 'react-redux';
import {  initializeApp } from "./componets/redux/app-reducer";
import Preloader from './componets/Preloader/Preloader';


class App extends React.Component  {
  componentDidMount()  {
    this.props.initializeApp();
 }

  render () {
    if (!this.props.initialized){
    return <Preloader />}
  return (  
    <div className='app-wrapper'>
      
      <HeaderContainer />

      <Navbar />
      
      <div className='app-wrapper-content'> 
      <Routes>
        <Route path='/dialog' element={
        <DialogContainer />}  />
        
        
        <Route path="/profile" element={<ProfileContainer />}>
        <Route path=":userId" element={<ProfileContainer />} />
      </Route>

            <Route path='/users' element={ <UsersContainer /> }/> 

            <Route path='/login' element={<Login />} />


            <Route path='/news' element={<News />}/> 
          <Route path='/music' element={<Music />}/> 
        <Route path='/settings' element={<Setting />}/> 
      </Routes>
      
      </div>
      
    </div>
    
  );
  }
}
const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);

