import React from 'react';
import Results from './Results.js';


const Sunsets = (props) => {
    return (
        <Results query={"sunsets"} api={props.api} />
    );
}

export default Sunsets;