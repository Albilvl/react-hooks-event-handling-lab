// Code Keypad Component Here
import React from 'react';


function Keypad(){
    function handleChange(event) {
        console.log("Entering password...") 
    }
    return(
        <input type="password" placeholder="Enter your password" onChange={handleChange}>

        </input>

    )
}

export default Keypad