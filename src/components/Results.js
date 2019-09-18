import React, { Component } from 'react';

import Img from './Img';
import NoImages from './NoImages';

const Results = props => {
    const results = props.pics
    let pictures;
    console.log(results)

    if(results.length > 0) {
        pictures = results.map(img => {
            return <Img url ={`http://farm${img.farm}.staticflickr.com/${img.server}/${img.id}_${img.secret}.jpg`}
                    key = {img.id}
                    />
        })
    } else {
        pictures = <NoImages />
    }
    return (
        <div className="photo-container">
            <h2>{props.heading}</h2>
            <ul>
                {pictures}
            </ul>
        </div>
    );
}

export default Results;