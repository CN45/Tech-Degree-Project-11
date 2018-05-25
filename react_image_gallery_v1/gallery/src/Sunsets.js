import React from 'react';
import Results from './Results.js';
import SearchForm from './SearchForm';
import apiKey from './Config';

const Sunsets = (props) => {
    return (
      <div>
      <SearchForm api={apiKey}/>
        <Results query={"sunsets"} api={props.api} />
        </div>
    );
}

export default Sunsets;
