import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import NoResults from './NoResults';
// Create container component that takes in a keyword and api key as props,
// and fetches the photos and other required information from the API
// Results.js file uses axios get command to fetch the flickr api data based upon either the button pushed or whatever is input into search form
//Use keyword this inside contructor, this.state is equal to an object, the state in this app will provide the photos we want to display
class Results extends Component {
constructor() {
  super();
  this.state = {
    keyword: '',
    photos: [],
    noPics: false,
    loading: true
  }
}

componentDidMount() {
if (this.props.query !== "") {

axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.api}&tags=${this.props.query}&per_page=16&format=json&nojsoncallback=1`)
  .then(response => {
    this.setState({
      photos:response.data.photos.photo,
      loading: false
    })
  })
  .catch(error => {
    console.log('Error fetching and parsing data', error);
  });
 }
}
componentWillReceiveProps(newProps) {
       this.setState({ keyword: newProps.query });
       this.performSearch(newProps.query);
   }



   performSearch = (query) => {
       axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.props.api}&tags=${query}&per_page=16&format=json&nojsoncallback=1`)
           .then(response => {
               this.setState({
                   photos:response.data.photos.photo,
                   loading: false
               })
           })
           .catch(error => {
               console.log('Error fetching and parsing data', error);
           });
   }

   render() {



                 // Include a 404-like error route that displays when a URL path does not match a route.

             if (this.state.photos.length === 0 && this.state.keyword !== '') {
                 return (<NoResults />);
             } else {
                 return (
                     <PhotoList photos={this.state.photos} query={this.state.keyword} />
                 );
             }
         }


  }



export default Results;
