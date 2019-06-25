import React, { useState } from 'react'; 
import FsLightbox from 'fslightbox-react';
import './Lightbox.css';
import lb1 from '../../assets/Images/lb1.jpg';
import lb2 from '../../assets/Images/lb2.jpg';
import lb3 from '../../assets/Images/lb3.jpg';
import lb4 from '../../assets/Images/lb4.jpg';
import lb5 from '../../assets/Images/lb5.jpg';
import lb6 from '../../assets/Images/lb6.jpg';
import lb7 from '../../assets/Images/lb7.jpg';
import lb8 from '../../assets/Images/lb8.jpg';
import lbThumb1 from '../../assets/Images/lbThumb1.jpg';
import lbThumb2 from '../../assets/Images/lbThumb2.jpg';
import lbThumb3 from '../../assets/Images/lbThumb3.jpg';
import lbThumb4 from '../../assets/Images/lbThumb4.jpg';
import lbThumb5 from '../../assets/Images/lbThumb5.jpg';
import lbThumb6 from '../../assets/Images/lbThumb6.jpg';
import lbThumb7 from '../../assets/Images/lbThumb7.jpg';
import lbThumb8 from '../../assets/Images/lbThumb8.jpg';
import fullScreen from '../../assets/Images/fullscreen.png';

function Lightbox() { 
    const [lightboxController, setLightboxController] = useState({ 
        toggler: false, 
        slide: 1 
    });

    function openLightboxOnSlide(number) { 
        setLightboxController({ 
            toggler: !lightboxController.toggler, 
            slide: number, 
        }); 
    }

return ( 
        <div className="cm-gallery-container"> 
            <a 
                onClick={ () => openLightboxOnSlide(1) }
                style={{backgroundImage: `url(${lbThumb1})`}}>
                    <div className="cm-icon-cont">
                        <img src={fullScreen} alt="FullScreen" />
                    </div>
            </a> 
            <a 
                onClick={ () => openLightboxOnSlide(2) }
                style={{backgroundImage: `url(${lbThumb2})`}}>
                    <div className="cm-icon-cont">
                        <img src={fullScreen} alt="FullScreen" />
                    </div>
            </a> 
            <a 
                onClick={ () => openLightboxOnSlide(3) }
                style={{backgroundImage: `url(${lbThumb3})`}}>
                    <div className="cm-icon-cont">
                        <img src={fullScreen} alt="FullScreen" />
                    </div>
            </a> 
            <a 
                onClick={ () => openLightboxOnSlide(4) }
                style={{backgroundImage: `url(${lbThumb4})`}}>
                    <div className="cm-icon-cont">
                        <img src={fullScreen} alt="FullScreen" />
                    </div>
            </a> 
            <a 
                onClick={ () => openLightboxOnSlide(5) }
                style={{backgroundImage: `url(${lbThumb5})`}}>
                    <div className="cm-icon-cont">
                        <img src={fullScreen} alt="FullScreen" />
                    </div>
            </a> 
            <a 
                onClick={ () => openLightboxOnSlide(6) }
                style={{backgroundImage: `url(${lbThumb6})`}}>
                    <div className="cm-icon-cont">
                        <img src={fullScreen} alt="FullScreen" />
                    </div>
            </a> 
            <a 
                onClick={ () => openLightboxOnSlide(7) }
                style={{backgroundImage: `url(${lbThumb7})`}}>
                    <div className="cm-icon-cont">
                        <img src={fullScreen} alt="FullScreen" />
                    </div>
            </a> 
            <a 
                onClick={ () => openLightboxOnSlide(8) }
                style={{backgroundImage: `url(${lbThumb8})`}}>
                    <div className="cm-icon-cont">
                        <img src={fullScreen} alt="FullScreen" />
                    </div>
            </a> 
            <FsLightbox 
                toggler={ lightboxController.toggler } 
                slide={ lightboxController.slide } 
                urls={ [ 
                    `${lb1}`,
                    `${lb2}`,
                    `${lb3}`,
                    `${lb4}`,
                    `${lb5}`,
                    `${lb6}`,
                    `${lb7}`,
                    `${lb8}`
                ] } 
            /> 
        </div> 
); 
}

export default Lightbox;