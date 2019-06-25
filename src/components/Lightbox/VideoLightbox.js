import React, { useState } from 'react'; 
import FsLightbox from 'fslightbox-react';

function VideoLightbox(props) { 
    let videoLink = props.videoLink;
    let buttonText = props.buttonText;
    const [toggler, setToggler] = useState(false);
    const root = document.getElementById("root");
return ( 
        <div className="cm-video-container"> 
            <button onClick={ () => setToggler(!toggler) }> 
                <span>{buttonText}</span>
            </button> 
            <FsLightbox 
                toggler={ toggler } 
                urls={ [ 
                 `${videoLink}`
                ] } 
                onOpen={ () => {
                    root.className = ('lightbox-active');
                } } 
                onClose={ () => {
                    root.className = ('sticky');
                } } 
            />
        </div> 
); 
}

export default VideoLightbox;