import React from 'react'
import './my-playlist-item.css'

function MyPlaylistItem(props){
    return(
        <li className="MyPlaylistItem">
                <a href="#">{props.data.title}</a>
        </li>
    )
}

export default MyPlaylistItem