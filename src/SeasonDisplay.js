import React from 'react';
import reactDom from 'react-dom';
import "./SeasonDisplay.css";

const getSeason = (lat, month) => {
    if (month > 2 && month < 9 ) {
        return lat > 0 ? "lato" : "zima"
    } else {
        return lat > 0 ? "zima" : "lato"
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const text = season === "zima" ? "Zimko" : "Ciepełko";
    const icon = season === "zima" ? "snowflake" :  "sun";

    return ( 
        <div className={`season ${season}`}> 
            <i className={`icon-left massive ${icon} icon`} />
            <h1> { text } </h1>
            <i className={`icon-right massive ${icon} icon`}/>
        </div>
     );
}
 
export default SeasonDisplay;

// <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" integrity="sha512-8bHTC73gkZ7rZ7vpqUQThUDhqcNFyYi2xgDgPDHc+GXVGHXq+xPjynxIopALmOPqzo9JZj0k6OqqewdGO3EsrQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />