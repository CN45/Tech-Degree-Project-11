import React from 'react';

const Gallery = props => (
  <li className="gif-wrap">
    <img src={props.url} alt=""/>
  </li>
);

export default Gallery;
