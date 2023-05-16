import React from 'react';
import { useForm } from "react-hook-form";

const LoginForm = (props) =>  {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return ( 
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input {...register("Login", {required: true, maxLength: 200})} placeholder={"Login"} />
      </div>
      <div>
        <input {...register("Password")} placeholder={"Password"} />
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
 
    return ( <div>
      <h1>You are not authorized</h1>
     <LoginForm />
     </div>
    )
}

export default Login;