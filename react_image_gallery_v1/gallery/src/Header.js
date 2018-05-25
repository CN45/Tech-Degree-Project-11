
import React, { Component } from "react";
import SearchForm from './SearchForm';

class Header extends Component {
  render() {
    return (
      <div className="container">
        <h2>Flickr Search</h2>
<SearchForm/>
      </div>
    );
  }
}
export default Header;
