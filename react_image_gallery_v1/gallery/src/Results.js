import React, { Component } from 'react';
import axios from 'axios';
import PhotoList from './PhotoList';
import NoPics from './NoPics';


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
                   photos: response.data.photos.photo,
                   loading: false
               });
           })
           .catch(error => {
               console.log('Error fetching and parsing data', error);
           });
   }

   render() {



                 // Include a 404-like error route that displays when a URL path does not match a route.

             if (this.state.photos.length === 0 && this.state.keyword !== '') {
                 return (<NoPics />);
             } else {
                 return (
                     <PhotoList photos={this.state.photos} query={this.state.keyword} />
                 );
             }
         }


  }



export default Results;
