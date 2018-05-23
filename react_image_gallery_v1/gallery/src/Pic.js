import React from 'react';
//display photos from flickr each with unique key
const Pic = props => (
  <li className="pic-wrap">
    <img src={props.url} alt="" key={props.id}/>
  </li>
);

export default Pic;
