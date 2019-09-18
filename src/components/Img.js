import React from 'react';

const Img = props => {
    return (
        <li>
            <img src={props.url} alt=''></img>
        </li>
    );
}

export default Img;