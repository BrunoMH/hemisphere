import React from 'react';
import './Hemisphere.css';
import northernPic from './image/pic-1.jpg';
import southernPic from './image/pic-2.jpg';

const hemisphereConfig = {
    Northern : {
        text: 'it is northern hemisphere',
        picture: northernPic
    },
        Southern: {
            text: 'it is southern hemisphere',
            picture: southernPic
    }
}
const HemisphereDisplay = ({ latitude }) => {
 
    const hemisphere = latitude > 0 ? 'Northern' : 'Southern';
    const {text, picture} = hemisphereConfig[hemisphere]

    return (
        <div ClassName= {hemisphere} >
            <img src={picture} alt="hemisphere picture"/>
            { text }
        </div>
    )
}

export default HemisphereDisplay; 
