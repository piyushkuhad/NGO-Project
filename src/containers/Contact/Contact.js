import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import image from "../../assets/Images/matt-artz-431965-unsplash.jpg";

class Contact extends Component {
    render(){
        return(
            <div>
                <Header />
                <Hero
                    image_path={image} 
                    title="Contact Us" 
                    button={false}
                    overlay = {true}
                />
            </div>
        )
    }
}

export default Contact;