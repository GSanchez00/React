//console.log("Hola mundo")
import React from 'react'
import ReactDOM from 'react-dom'    //los importa desde el package.json que tiene las dependencias que se instalan. 
//import Playlist from './src/playlist/components/playlist' 
//import Content from './src/playlist/components/content' 
import Home from '../pages/containers/home' 
//import Media from './src/playlist/components/media' 
import data from '../api.json'
import dataPlaylists from '../myplaylists.json'
import dataFriends from '../playlists-friends.json'

const homeContainer= document.getElementById("home-container");
const holaMundo=<h1>Hola Estudiante!</h1>;
//ReactDOM.render(que voy a renderizar y donde)
//ReactDOM.render(<Media title="¿Que es responsive design?" author="Gustavo_Sanchez" type="video" image="./images/covers/bitcoin.jpg" />,app)
ReactDOM.render(<Home data={data} dataPlaylists={dataPlaylists} dataFriends={dataFriends} />,homeContainer)

