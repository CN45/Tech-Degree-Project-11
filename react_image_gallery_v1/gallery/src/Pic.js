import React from 'react';
//display photos from flickr each with unique key
// The title of each image list should be displayed dynamically via "props".
const Pic = props => (
    <li key={props.id}>
    <img src={props.url} alt="" key={props.id}/>
  </li>
);

export default Pic;
