import React from 'react';

const Card = ({fillColor}) => {
    return <svg className="icon" viewBox="0 0 80 80">
        <circle cx="40" cy="40" r="40" fill={fillColor}/>
        <path
            d="M53 56H47.0703L31.8594 31.7891V56H25.9297V21.875H31.8594L47.1172 46.1797V21.875H53V56Z"
            fill="white"
        />
    </svg>
}

export default Card