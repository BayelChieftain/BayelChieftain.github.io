import React from "react";
import C from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const  ProfileInfo = (props) => {

    if (!props.profile) {
      return  <Preloader />
    };

    return  <div>
        <div className={C.discrpBlock}>
            <img src={props.profile.photos.large}/>
            <ProfileStatusWithHooks updateStatus={props.updateStatus} status={props.status} />
        </div>
    </div>
}

export default ProfileInfo;