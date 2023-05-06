import React from "react";
import styles from './Users.module.css'

const  Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
                {id: 1, photoUrl: 'https://infosecurity.by/wp-content/uploads/2021/10/vk-user-780x470.jpg', followed: false, fullName: 'Dima', status: 'I like protein', location: {city: 'Moscow', country: 'Russia'}},
                {id: 2, photoUrl: 'https://infosecurity.by/wp-content/uploads/2021/10/vk-user-780x470.jpg', followed: true, fullName: 'Baystan', status: 'I love interactclub', location: {city: 'Bishkek', country: 'Kyrgystan'}},
                {id: 3, photoUrl: 'https://infosecurity.by/wp-content/uploads/2021/10/vk-user-780x470.jpg', followed: false, fullName: 'Pavel', status: 'just hard work', location: {city: 'Dubai', country: 'UAE'}}
              ]); 
    }
    
    return <div>
        {
            props.users.map( (u) => 
                <div key={u.id} >
                    <span>
                        <div>
                            <img src={u.photoUrl} className={styles.userPhoto} />
                        </div>
                        <div>
                            { u.followed 
                            ? <button onClick={ () => { props.unfollow(u.id) }} >Unfollow</button> 
                            : <button onClick={ () => { props.follow(u.id) }}>follow</button>}
                           
                        </div>
                    </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
                                <div> {u.status} </div>
                            </span>
                            <span>
                                <div> {u.location.city} </div>
                                <div> {u.location.contry} </div>
                                
                            </span>
                        </span>
                </div> 
            )
        }
    </div>
}

export default Users;