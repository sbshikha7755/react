import { useState } from 'react'
import "./Navbar.css";

function Navbar (){

    return(
        <>
          <div className='navbar-wapper'>
            <div className="navbar">
           <div className='para'> <p>Foodieland</p></div>
            <ul className='linkk'>
                <li><a href="/">Home</a></li>
                <li><a href="/Recipes">Recipes</a></li>
                <li><a href="/Blog">Blog</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/About Us">About Us</a></li>
            </ul>
            </div>
          </div>
          
        </>
    )
}

export default Navbar;