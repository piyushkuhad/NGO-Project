import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import image from "../../assets/Images/adult-african-afro-1083619.jpg";

class About extends Component {
    render(){
        return(
            <div>
                <Header />
                <Hero
                    image_path={image} 
                    title="About Us" 
                    button={false}
                    overlay = {true}
                />
            </div>
        )
    }
}

export default About;