import React from 'react';
import Pic from './Pic';

//Display photos each with unique key
//server, photo id, photo secret are all from the flickr api docs


const PhotoList = (props) => {
    const results = props.photos,
        query = props.query;
    let searchResults = results.map(photo =>
        <Pic url={`https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`} key={photo.id} />
    );
        return (
            <div className="photo-container">
                <h2>{query}</h2>
                <ul>
                    {searchResults}
                </ul>
            </div>
        );
}

export default PhotoList;
