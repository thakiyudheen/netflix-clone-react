
import React from 'react';
import "./NavBar.css";
import { IoSearch } from "react-icons/io5";



function NavBar() {
    return (
        <div className="navbar">
           
          
            <ul>
                <li> <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/></li>
                <li>Home</li>
                <li> Series</li>
                <li>Liked</li>
                <li>My List</li>
            </ul>
            <IoSearch style={{ color: 'white' }} className='search' />
           
           <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" alt="Avatar"/>
        </div>
        
    )
}

export default NavBar;
