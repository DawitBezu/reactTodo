import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Navbar = () => {
    return ( 
            <div className="navbar-end">
                <Link to='/' className="navbar-item">Home</Link>
                <NavLink to='/about' className="navbar-item">About</NavLink>
            </div>
             );
}
 
export default Navbar;