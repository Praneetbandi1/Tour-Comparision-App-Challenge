//U46368100
import { useState } from "react";

export default function TourDisplay({ name, info, image, price }) { 

    const [showDetails, setShowDetails] = useState(false) 
    const [showComponent, setShowComponent] = useState(true) 

    function detailsButtonClick() {
        setShowDetails(!showDetails) 
    }

    function notInterestedButtonClick() {
        setShowComponent(false) 
    }

    if (!showComponent) { 
        return null
    }

    return (
        <div className="tour">
            <h2>{name}</h2>
            <img
                src={image}
                alt={name}
                width="400"
            />
            <br />
            <button onClick={detailsButtonClick}>{showDetails ? 'Show Less' : 'Read More'}</button>
            {" "}
            <button onClick={notInterestedButtonClick}>Not Interested</button>
            <br />
            {showDetails && < b className="price"> Price: ${price}</b>} {/* if showDetails is true, display price*/}
            <br />
            {showDetails && < p className="info">{info}</p>}
        </div>
    )
}