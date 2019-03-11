import React from 'react'
import './search.css'
// function Search(props)
// {
//     return (
//         <form action=""> <input type="text"></input></form>
//     )
// } 

const Search = (props) =>(
    <form onSubmit={props.handleSubmit} className='Search'>
        <input 
            ref={props.setRef}
            type="text" 
            className='Search-input' 
            placeholder="Busca tu video favorito" 
            name="search"
            onChange={props.handleChange}></input>
    </form>
)

export default Search