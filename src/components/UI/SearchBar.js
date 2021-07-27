import React from 'react'

import classes from './SearchBar.module.css'
import searchIcon from '../assets/searchIcon.svg'

function SearchBar(props) {
    return (
        <div className={classes.inputContainer}>
            <img src={searchIcon} />
            <input
             placeholder="Pesquisa"
             onFocus={(e) => e.target.placeholder = ""} 
             onBlur={(e) => e.target.placeholder = "Pesquisa"}/>
        </div>
    )
}

export default SearchBar
 