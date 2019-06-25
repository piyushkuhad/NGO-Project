import React, { Fragment } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar= () => {
    return(
        <Fragment>
            <div className="cm-menu-wrapper">
                <ul className="row-fluid">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </Fragment>
    )
}

export default Navbar;