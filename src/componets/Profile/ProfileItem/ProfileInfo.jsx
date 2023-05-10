import React from "react";
import C from './ProfileInfo.module.css'
import Preloader from "../../Preloader/Preloader";



const  ProfileInfo = (props) => {

    if (!props.profile) {
      return  <Preloader />
    };

    return  <div>
    <div>
        <img src='https://media.istockphoto.com/id/1300296030/photo/tropical-beach-palm-trees-sea-wave-and-white-sand.jpg?s=612x612&w=0&k=20&c=6xdlJDxSp5FVUpQC7AOt3ooHYPd3-gTQNF6lmwX5krk=' />
    </div>
        <div className={C.discrpBlock}>
            <img src={props.profile.photos.large}/>
            ava + disrp
        </div>
    </div>
}

export default ProfileInfo;