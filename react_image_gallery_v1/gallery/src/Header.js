
import React, { Component } from "react";
import Nav from './Nav';
import SearchForm from './SearchForm';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <h2>Flickr Search</h2>
          <Nav />
          <SearchForm />
      </div>
    );
  }
}
export default Header;
