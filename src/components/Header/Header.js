import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import './Header.css';

class Header extends Component {
    render(){
        return(
            <Fragment>
                <header>
                    <div className="page-center">
                        <div className="row-fluid">
                            <div className="cm-logo">
                                <Link to="/">
                                    NGO
                                </Link>
                            </div>
                            <div className="cm-menu-primary">
                                <Navbar />
                            </div>
                            <div className="cm-donate-cont">
                                <span className="cm-donate-btn"><span>Donate</span></span>
                            </div>
                        </div>
                    </div>
                </header>
            </Fragment>
        )
    }
}

export default Header;