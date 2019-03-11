import React, {Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../categories/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import HandleError from '../../error/containers/handleError'
import VideoPlayer from '../../player/containers/video-player';

class Home extends Component{
    state = {
        modalVisible:false
    }
    handleOpenModal = (media) => {
        this.setState({
            modalVisible: true,
            media: media
        })
    }
    handleCloseModal = (event) => {
        this.setState({
            modalVisible: false
        })
    }
    render(){
        return(
            <HandleError>
                <HomeLayout>
                    <Related dataPlaylists={this.props.dataPlaylists.myplaylists} dataFriends={this.props.dataFriends.data}></Related>
                    
                    <Categories categories={this.props.data.categories} 
                    handleOpenModal={this.handleOpenModal}/>
                    {
                        this.state.modalVisible &&
                    
                        <ModalContainer>
                            <Modal handleCLick={this.handleCloseModal}>
                            <VideoPlayer autoPlay src={this.state.media.src} title={this.state.media.title}/>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </HandleError>
        )
    }
}

export default Home