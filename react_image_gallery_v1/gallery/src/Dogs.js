//Display each caterory this corresponds to each button. This one is for the dogs button
//Once clicked the dog button brings in 16 photos from Flickr api to the app

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
