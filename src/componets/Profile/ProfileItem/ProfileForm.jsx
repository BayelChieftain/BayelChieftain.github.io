import React from "react";
import { useForm } from "react-hook-form";
import C from './ProfileInfo.module.css';

const ProfileForm = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
      props.saveProfile(data)
      console.log(data)
      props.setEditMode()
    };

    return <form onSubmit={handleSubmit(onSubmit)}>
     <div>
         <b>Full name</b> <div>{ <input {...register("fullName", {required: true, maxLength: 40})} placeholder={"Name"} /> }</div> 
     </div>
    
    <div>
     <b> Looking for a job: </b> <div> { <input {...register("lookingForAJob")} type={"checkbox"} />} </div> 
    </div>
    <div>
     <b> Looking for a job Description: </b> <div> { <input {...register("LookingForAJobDescription")}  />} </div> 
    </div>
    
    <div>
    <b> About me </b> <div> { <textarea {...register("aboutMe")}  />} </div> 
    </div>
 
    <div>
     <input type="submit" />
    </div>
        
        <div>
            <b>Contacts</b>:  {Object.keys(props.profile.contacts)
            .map( key => {
                return (<div className={C.contact}>
                    <b>{key}:</b> <div> <input {...register("contacts." + key)} placeholder={key}/> </div> 
                </div>)
            })}
        </div>
 
 </form>
};

export default ProfileForm