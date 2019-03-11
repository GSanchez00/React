import React from 'react'
import MyPlaylistItem from './my-playlist-item'
import './my-playlist.css'

function MyPlaylist(props){
    return(
        <div>
            <h2 className="MyPlaylist-title">My Playlist</h2>
            <ol className="MyPlaylist">
                {
                    props.dataPlaylists.map((item)=>{
                        return (<MyPlaylistItem key={item.id} data={item} />)
                    })
                }
            </ol>
        </div>
    )
}

export default MyPlaylist