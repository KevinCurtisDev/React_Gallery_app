import React, { Component } from 'react';

import Img from './Img';
import NoImages from './NoImages';

const Results = props => {
    //Set results to equal props.pics pulled in from the Results component in App.js
    const results = props.pics
    let pictures;

    //If the images fetched is greater than zero, map through the array of images and create an image component with the specified URL
    if(results.length > 0) {
        pictures = results.map(img => {
            return <Img url ={`http://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
                    key = {img.id}
                    />
        })
    } else {
        //If no images are fetched, return a NoImages component
        pictures = <NoImages />
    }
    return (
        <div className="photo-container">
            {/* Return the heading pulled in from the results component in App.js */}
            <h2>{props.heading}</h2>
            {/* Return a list containing the created Img components */}
            <ul>
                {pictures}
            </ul>
        </div>
    );
}

export default Results;