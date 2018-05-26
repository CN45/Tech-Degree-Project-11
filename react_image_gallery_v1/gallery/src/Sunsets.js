import React from 'react';
import Results from './Results.js';
import SearchForm from './SearchForm';
import apiKey from './Config';

//Display each caterory this corresponds to each button. This one is for the sunsets button
//Once clicked the sunsets button brings in 16 photos from Flickr api to the app
const Sunsets = (props) => {
    return (
      <div>
      <SearchForm api={apiKey}/>
        <Results query={"sunsets"} api={props.api} />
        </div>
    );
}

export default Sunsets;
