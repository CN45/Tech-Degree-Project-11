import React, { Component } from 'react';
import Nav from './Nav';
import Results from './Results';



export default class SearchForm extends Component {
//search field

      state = {
          query: '',
      };

      passThrough = {
          input: ''
      };

      onSearchChange = e => {
          this.passThrough.input = e.target.value;
      };

      handleSubmit = e => {
          e.preventDefault();
          e.currentTarget.reset();
          this.setState({ query: this.passThrough.input });
      };

      render() {
          return (
              <div>
                  <form className="search-form" onSubmit={this.handleSubmit}>
                      <input type="search" name="search" placeholder="Search" onChange={this.onSearchChange} />
                      <button type="submit" className="search-button">
                      </button>
                  </form>
                  <Nav/>
                  <Results query={this.state.query} api={this.props.api} />
              </div>
          );
      }
}
