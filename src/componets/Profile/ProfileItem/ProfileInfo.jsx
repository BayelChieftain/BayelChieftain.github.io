import React from "react";
import C from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from '../../../assts/img/interact.png';


const  ProfileInfo = (props) => {

    if (!props.profile) {
      return  <Preloader />
    };

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return  <div>
        <div className={C.discrpBlock}>
            <img className={C.mainPhoto} src={props.profile.photos.large || userPhoto}/>
            { props.isOwner && <div className={C.mainLoadPhoto}>
            <h4>Загрузить фото профиля</h4>
            <div> { props.isOwner && <input className={C.inputPhoto} type="file" onChange={ onMainPhotoSelected } /> }</div>
            </div>}
            <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status} />
        </div>
    </div>
}

export default ProfileInfo;