import React, {Fragment} from 'react';
import VideoLightbox from '../Lightbox/VideoLightbox';
import './Hero.css';

const Hero = (props) => {
    const styleBg = {
        bgUrl : props.image_path
    }
    //console.log(styleBg.bgUrl);
    const overlay = props.overlay;
    const videoLink = props.videoLink;
    const buttonText = props.buttonText
    let overlay_chk = overlay?"overlay":"no-overlay";
    return(
        <Fragment>
            <div 
                className={`cm-hero-cont ${overlay_chk}`} 
                data-aos="fade"
                style={{backgroundImage: `url(${styleBg.bgUrl})`}}>
                <div className="cm-hero-inner">
                    <div className="page-center">
                        <h1 data-aos="fade-up">{props.title}</h1>
                        {
                            props.button?
                            <VideoLightbox videoLink={videoLink} buttonText={buttonText} />
                            : 
                            ""
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Hero;