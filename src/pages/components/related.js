import React from 'react'
import logo from '../../../images/logo.png'
import './related.css'
import MyPlaylist from './my-playlist';
import FriendsPlaylist from './friends-playlist';

function Related(props){
    return(
        <div className="Related">
            <img src={logo} width={250}></img>
            <MyPlaylist dataPlaylists={props.dataPlaylists}  />
            <FriendsPlaylist dataFriendsPlaylists={props.dataFriends} />
        </div>
    )
}

export default Related