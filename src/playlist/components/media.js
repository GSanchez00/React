import React, {PureComponent} from 'react';
import './media.css'
import PropTypes from 'prop-types'

class Media extends PureComponent{
    /*
    constructor(props) //se llama cuando el componente media se renderea
    {
        super(props)
        //ECMASCRIPT 2015 o el 6 lo hacia de esta forma 
        //enlazamos el evento del dom a la clase
        //this.handleClick= this.handleClick.bind(this); //Le cambio el contexto a mi function. 
        //Al handleClick le coloco un this nuevo. 
        this.state={
            author: props.author
        }
    }
    */
   
    //El seteo del estado en EM7 se hace asi
    state = {
        author: this.props.author
    }
    //El binding de los eventos en ECMAScript 7 se hace asi
    handleClick = (event) =>
    {
        this.props.openModal(this.props)
    }
    render(){
        const styles={
            container:
            {
                fontSize: 18, //Significa "14px", si quiero otra medida uso comillas pero con px no hace falta
                textAlign: "center",
                width: 260,
                border: "1px solid red"
            }
        }
        return (
            <div className="Media" onClick={this.handleClick}>
                <div /*style={styles.container}*/>
                    <img className="Media-image" src={this.props.cover} alt="" width={260} height={160}></img>
                    <h3 className="Media-title">{this.props.title}</h3>
                    <p className="Media-author">{this.state.author}</p>
                </div>
            </div>
        )
    }
}

Media.propTypes={
    image : PropTypes.string,
    title : PropTypes.string.isRequired,
    author : PropTypes.string,
    type : PropTypes.oneOf(["video","audio"]) //asi validamos que el texto que me llega sea o texto o audio
}

export default Media;

//const { title, author, image } = this.props;