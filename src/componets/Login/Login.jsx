import React from 'react';
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import {  login, logout } from "../redux/auth-reducer";
import { Navigate } from 'react-router-dom';

const LoginForm = (props) =>  {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    props.login(data.email, data.password, data.chekbox);
    console.log(data);
    // {props.captchaUrl &&  <img src={props.captchaUrl} />}
  };
  return ( 
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("email", {required: true, maxLength: 200})} placeholder={"Login"} />
      </div>
      <div>
        <input type={'password'} {...register("password")} placeholder={"Password"} />
      </div>
      <div>
        <input {...register("chekbox")} type={"checkbox"} />
      </div>
      <div>
        <input type="submit" />
      </div>
    </form>
    
  )
}

const Login = (props) =>  {

  if (props.isAuth) {
    return <Navigate to={'/profile'} />
  }
 
    return ( <div>
      <h1>You are not authorized</h1>
     <LoginForm captchaUrl={props.captchaUrl} login={props.login} logout={props.logout} />
     </div>
    )
}

let mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login, logout})(Login);