import React, {Component, Fragment} from 'react';
import './Footer.css';

class Footer extends Component {
    render(){
        return(
            <Fragment>
                <footer>
                    <div className="page-center">
                        <div className="cm-footer-top">
                            <div className="row-fluid">
                                <div className="cm-col cm-col1">
                                    <h3>NGO</h3>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus est feugiat, volutpat lectus a, pellentesque felis.ibus neque eu fringilla.
                                    </p>
                                </div>
                                <div className="cm-col cm-col2">
                                    <h3>Contact Us</h3>
                                    <p>
                                        <i className="fa fa-map-marker"></i>
                                        <span>Lorem ipsum dolor sit amet</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-phone"></i>
                                        <span>Support: +(034) 256 7850</span>
                                    </p>
                                    <p>
                                        <i className="fa fa-envelope"></i>
                                        <span>Email: info@example.com</span>
                                    </p>
                                </div>
                                <div className="cm-col cm-col3">
                                    <div className="cm-footer-social">
                                        <h3>Follow Us</h3>
                                        <ul className="row-fluid">
                                            <li>
                                                <a href="https://www.facebook.com">
                                                    <i className="fa fa-facebook"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.twitter.com">
                                                    <i className="fa fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.instagram.com">
                                                    <i className="fa fa-instagram"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.youtube.com/">
                                                    <i className="fa fa-youtube	"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cm-footer-bottom">
                        <div className="page-center">
                            <p>Copyrights © 2019 <strong>NGO</strong>. All rights reserved.</p>
                            <div id="back-to-top">
                                <i className="fa fa-arrow-up"></i>
                            </div>
                        </div>
                    </div>
                </footer>
            </Fragment>
        )
    }
}

export default Footer;