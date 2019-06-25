import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import Footer from '../../components/Footer/Footer';
import Lightbox from '../../components/Lightbox/Lightbox';
import CountUp from 'react-countup';
import image from "../../assets/Images/black-and-white-black-and-white-boy-551590.jpg";
import videoBg from "../../assets/Images/video-bg.jpg";
import './Home.css';
import VideoLightbox from '../../components/Lightbox/VideoLightbox';

class Home extends Component {
    render(){
        return(
            <div>
                <Header />
                <Hero
                    image_path={image} 
                    title="Doing Nothing is Not An Option of Our Life" 
                    button={true}
                    videoLink = "https://www.youtube.com/watch?v=QvkDDA62-tw"
                    buttonText = {[<i className="fa fa-play-circle"></i>, "Watch Video"]}
                    overlay = {false}
                />
                {/* Three Column Equal Banner Module Start */}
                    <div className="cm-three-col-eq-banner-module">
                        <div className="cm-col cm-col1">
                            <div className="cm-col-inner">
                                <h3>Server Over</h3>
                                <h2><CountUp delay={1} duration={5} end={1432805} /></h2>
                                <p>Children in 190 countries in the world</p>
                            </div>
                        </div>
                        <div className="cm-col cm-col2">
                            <div className="cm-col-inner">
                                <h3>Donate Money</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                                <span className="cm-banner-btn">Donate Now</span>
                            </div>
                        </div>
                        <div className="cm-col cm-col3">
                            <div className="cm-col-inner">
                                <h3>Be a Volunteer</h3>
                                <p>Even the all-powerful Pointing has no control about the blind texts.</p>
                                <span className="cm-banner-btn">Be a Volunteer</span>
                            </div>
                        </div>
                    </div>
                {/* Three Column Equal Banner Module End */}

                {/* Two Column Equal Video Content Module Start */}
                    <div className="cm-two-col-eq-video-cont-module">
                        <div className="page-center">
                                <div className="cm-col cm-col1">
                                    <h2>Welcome To <span>NGO</span> Foundation</h2>
                                    <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at sodales augue. Praesent vestibulum dui at pulvinar blandit. Nunc pellentesque enim eu velit varius, at maximus sem molestie. Suspendisse sed aliquet urna. Mauris nulla metus, iaculis quis nunc eget, convallis consectetur leo. Quisque mollis congue ipsum in efficitur. Proin porttitor turpis ut sodales accumsan. Suspendisse et feugiat nulla, porttitor laoreet magna. Vivamus luctus ut nisl eget facilisis. Fusce id posuere ante. Aenean tristique ante a quam feugiat, sed fringilla magna porttitor. Curabitur sed dui nec diam vehicula mattis.
                                    </p>
                                </div>
                                <div className="cm-col cm-col2">
                                    <div 
                                        className="video-bg"
                                        style={{backgroundImage: `url(${videoBg})`}}
                                    >
                                        <VideoLightbox 
                                            buttonText={[<i className="fa fa-play"><span className="ripple"></span></i>]}
                                            videoLink = "https://www.youtube.com/watch?v=hWSKBIiIXEA"
                                        />
                                    </div>
                                </div>
                        </div>
                    </div>
                {/* Two Column Equal Video Content Module End */}

                {/* Lightbox Section Start */}
                    <Lightbox />
                {/* Lightbox Section End */}
                <Footer />
            </div>
        )
    }
}

export default Home;