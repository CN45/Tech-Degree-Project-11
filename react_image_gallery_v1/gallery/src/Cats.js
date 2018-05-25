import React from 'react';
import Results from './Results.js';
import SearchForm from './SearchForm';
import apiKey from './Config';

const Cats = (props) => {
    return(
      <div>
      <SearchForm api={apiKey}/>
        <Results query={"cats"} api={props.api} />
        </div>
    );
}

export default Cats;
