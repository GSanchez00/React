import React, {Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import Control from '../components/video-player-controls'
import formattedTime from '../../utils/time'
import ProgressBar from '../components/progress-bar';
import Spinner from '../components/spinner';
import Volume from '../components/volume';
import FullScreen from '../components/full-screen';
import {isFullScreen, requestFullScreen, exitFullScreen} from '../../utils/screen';

class VideoPlayer extends Component {
    //Estados iniciales
    state= {
        pause:true,
        duration:0,
        durationFloat:0,
        currentTime:0,
        currentTimeFloat:0,
        loading:false,
        lastVolume:1,
        volume:1
    }
    togglePlay = (event)=>{
        this.setState(
            {
                pause:!this.state.pause
            }
        )
    }
    componentDidMount(){
        this.setState(
            {
                pause: (!this.props.autoPlay)
            }
        )
    }
    handleLoadedMetadata = event => {
        this.video=event.target;
        //Cuando se carga la metadata del video vamos a tener la duracion en segundos
        this.setState({
            duration: formattedTime(this.video.duration),
            durationFloat: this.video.duration,
        })
    }
    handleTimeUpdate= event => {
        this.setState({
            currentTime: formattedTime(this.video.currentTime),
            currentTimeFloat:this.video.currentTime
        })
    }
    handleProgressChange = event => {
        this.video.currentTime=event.target.value
    }
    handleSeeking = event => {
        this.setState(
            {
                loading: true
            }
        )
    }
    handleSeeked = event => {
        this.setState({loading: false})
    }
    handleVolumeChange= event => {
        //event.target.value
        this.state.lastVolume=event.target.value;
        this.state.volume=this.state.lastVolume
        this.video.volume=this.state.volume;
    }
    handleVolumeClick = event =>{
        this.setState({lastVolume: this.state.volume, volume: this.state.volume===0 ? this.state.lastVolume : 0 })
        this.video.volume=this.state.volume;
    }
    handleFullScreenClick = event =>{
        if(!isFullScreen()) //averiguar moz ie
        {
            requestFullScreen(this.player);
        }
        else
        {
            exitFullScreen();
        }
    }
    setRef = element => {
        this.player= element;
    }
    render(){
        return(
            <VideoPlayerLayout setRef={this.setRef}>
                <Title title={this.props.title}/>
                <Control>
                <PlayPause 
                    pause={this.state.pause} 
                    handleClick={this.togglePlay} />
                    <Timer currentTime={this.state.currentTime} duration={this.state.duration}/>
                    <ProgressBar duration={this.state.durationFloat} value={this.state.currentTimeFloat} handleProgressChange={this.handleProgressChange}></ProgressBar>
                    <Volume handleVolumeChange={this.handleVolumeChange} handleVolumeClick={this.handleVolumeClick} value={this.state.lastVolume}></Volume>
                    <FullScreen handleFullScreenClick={this.handleFullScreenClick}></FullScreen>
                </Control>
                <Spinner active={this.state.loading}></Spinner>
                <Video 
                    muted={false}
                    pause={this.state.pause}
                    autoPlay={this.props.autoPlay}
                    handleLoadedMetadata = {this.handleLoadedMetadata}
                    handleTimeUpdate = {this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking} 
                    handleSeeked={this.handleSeeked}
                    src={this.props.src} />
            </VideoPlayerLayout>
        )
    }
}

export default VideoPlayer