import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = () => {
    return (
        <div>Some navigation
            <Link to={`/admin`}>Admin Dash</Link>
            <Link to={`/login`}>Login</Link>
        </div>
    )
}

export default Navbar;