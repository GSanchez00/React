import React from 'react'
import VolumeIcon from '../../icons/components/volume'
import './volume.css'   

function Volume(props){
    return (
        <div className="Volume">
            <button ></button>
            <div onClick={props.handleVolumeClick}><VolumeIcon color="white" size={25}  /></div>    
            <div className="Volume-range">
                <input type="range" min={0} max={1} step={.05} value={props.value} onChange={props.handleVolumeChange}></input>
            </div>
        </div>       
    )
}

export default Volume