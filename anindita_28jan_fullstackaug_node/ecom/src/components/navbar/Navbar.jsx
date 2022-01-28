import React from 'react'
import './navbar.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';

const Navbar = () => {
    return (
        <div className='navContainer'>
            <div className="navWarraper">
                <div className="left">
                    <span className= 'language'>English</span>
                    <div className="searchContainer">
                        <input/>
                        <SearchOutlinedIcon style ={{ color:'gray', fontSize: '16px'}}/>
                    </div>
                </div>
                <div className="center">
                    <h1 className="logo">Amazon</h1>
                </div>
                <div className="right">
                    <div className="menuItem">Register</div>
                    <div className="menuItem">Sign In</div>
                    <div className="menuItem">
                         <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlinedIcon />
                        </Badge>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar

