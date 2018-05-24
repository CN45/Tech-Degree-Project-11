
import React, { Component } from "react";
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <h2>Flickr Search</h2>
                  <Nav />
      </div>
    );
  }
}
export default Header;
