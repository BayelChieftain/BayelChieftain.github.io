import React from "react";
import Paginator from "../Paginator/Paginator";
import User from "./User";

let Users = ({currentPages, totalUsersCount, pageSize, onPageChanged, ...props}) => {
    return <div>

    <Paginator currentPages={currentPages} onPageChanged={onPageChanged} 
    totalUsersCount={totalUsersCount} pageSize={pageSize} />
    <div>
        {
            props.users.map( (u) => <User user={u} key={u.id} followingProgres={props.followingProgres} 
                                            unfollow={props.unfollow} follow={props.follow} /> 
            
            )
        }
    </div>
</div>
};

export default Users;