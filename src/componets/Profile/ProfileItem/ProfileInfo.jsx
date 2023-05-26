import React, { useState } from "react";
import C from './ProfileInfo.module.css';
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assts/img/interact.png';
import ProfileForm from "./ProfileForm";
import { saveProfile } from "../../redux/profile-reducer";
import { connect } from "react-redux";



const  ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);

    if (!props.profile) {
      return  <Preloader />
    };

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };

    return  <div>
        <div className={C.discrpBlock}>
            <img className={C.mainPhoto} src={props.profile.photos.large || userPhoto}/>
            { props.isOwner && <div className={C.mainLoadPhoto}>
            <h4>Загрузить фото профиля</h4>
            <div> { props.isOwner && <input className={C.inputPhoto} type="file" onChange={ onMainPhotoSelected } /> }</div>
            </div>}
            { editMode ? <ProfileForm saveProfile={ props.saveProfile } profile={ props.profile }
            setEditMode={ () => setEditMode(false)} />
            : <ProfileData profile={ props.profile } setEditMode={ () => setEditMode(true)} isOwner={props.isOwner} />  }
        

            <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status} />
        </div>
    </div>
}

const ProfileData = ({profile, isOwner, setEditMode}) => {
   return <div>
   { isOwner && <div> <button onClick={setEditMode}>EDIT</button></div>}
    <div>
        <b>Full name</b> {profile.fullName}
    </div>
   
   <div>
    <b> Looking for a job: </b> {profile.lookingForAJob ? 'yes' : 'no'}
   </div>
   
   <div>
   <b> About me </b>  {profile.aboutMe}
   </div>

   <div>
   <b> Contacts </b>  {Object.keys(profile.contacts).map( key => {
        return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
   })}
   </div>

</div>
}


const Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={C.contact}>
            <b>{contactTitle}</b>: {contactValue}
        </div>
    )
}

export default connect(null, {saveProfile})(ProfileInfo);