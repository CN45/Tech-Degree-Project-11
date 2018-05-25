
import React, { Component } from "react";
import SearchForm from './SearchForm';
import apiKey from './Config';
class Header extends Component {
  render() {
    return (
      <div className="container">
        <h2>Flickr Search</h2>
<SearchForm api={apiKey}/>
      </div>
    );
  }
}
export default Header;
