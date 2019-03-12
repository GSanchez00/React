import React from 'react'
import './friends-playlist-item.css'

function FriendsPlaylistItem(props){
    return(
        <li className="FriendsPlaylistItem">
            <a>
                <img className="FriendsPlaylistItem-image" src={props.data.avatar}/>
                {props.data.friend}
            </a>
        </li> 
    )
}

export default FriendsPlaylistItem