import React from 'react'

import Results from './Results.js';
import SearchForm from './SearchForm';


const Dogs = (props) => {
    return (
        <Results query={"dogs"} api={props.api} />
    );
}


export default Dogs;
