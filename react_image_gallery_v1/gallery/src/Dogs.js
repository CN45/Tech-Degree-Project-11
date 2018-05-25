import React from 'react';
import Results from './Results.js';
import SearchForm from './SearchForm';
import apiKey from './Config';

const Dogs = (props) => {
    return (
      <div>
      <SearchForm api={apiKey}/>
        <Results query={"dogs"} api={props.api} />
</div>
    );
}

export default Dogs;
