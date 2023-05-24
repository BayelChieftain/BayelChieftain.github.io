import React, { Suspense } from 'react';
import './App.css';
import Navbar from './componets/Navbar/Navbar';
import { Routes, Route } from "react-router-dom";
import Setting from './componets/Setting/Setting';
import News from './componets/News/News';
import Music from './componets/Music/Music';
import UsersContainer from './componets/Users/UsersContainer';
import HeaderContainer from './componets/Header/HeaderContainer';
import Login from './componets/Login/Login';
import { connect } from 'react-redux';
import {  initializeApp } from "./componets/redux/app-reducer";
import Preloader from './componets/Preloader/Preloader';

const DialogContainer = React.lazy( () => import('./componets/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy( () => import('./componets/Profile/ProfileContainer'));


class App extends React.Component  {
  componentDidMount()  {
    this.props.initializeApp ();
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
          <Suspense>  <DialogContainer /> </Suspense>
       
       }  />
        
        
        <Route path="/profile" element={<Suspense> <ProfileContainer /> </Suspense> }>
        <Route path=":userId" element={ <Suspense> <ProfileContainer /> </Suspense> } />
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

