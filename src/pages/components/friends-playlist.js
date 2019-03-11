import React from 'react'
import FriendsPlaylistItem from './friends-playlist-item'
import './friends-playlist.css'

function FriendsPlaylist(props){
    return(
        <div>
            <h2 className="FriendsPlaylist-title">Friends Playlist</h2>
            <ul className="FriendsPlaylist">
                {
                    props.dataFriendsPlaylists.map((item)=>{
                        return (<FriendsPlaylistItem key={item.id} data={item} />)
                    })
                }
            </ul>
        </div>
    )
}

export default FriendsPlaylist