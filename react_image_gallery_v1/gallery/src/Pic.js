import React from 'react';

const Pic = props => (
  <li className="pic-wrap">
    <img src={props.url} alt="" key={props.id}/>
  </li>
);

export default Pic;
