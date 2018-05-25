import React from 'react';
//import react router
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';


//import api key and import the components
import SearchForm from './SearchForm';
import Header from './Header.js';
import apiKey from './Config.js';
import Cats from './Cats.js';
import Sunsets from './Sunsets.js';
import Dogs from './Dogs.js';




//switch ----it returns only the first matching route
const App = () =>{

    return (
    <BrowserRouter>
      <div className="container">
      <Header/>
          <Switch>
          <Route exact path="/" render={ () => (<SearchForm api={ apiKey } />) } />
          <Route path="/cats" render={() => (<Cats api={apiKey} />)} />
          <Route path="/sunsets" render={() => (<Sunsets api={apiKey} />)} />
          <Route path="/dogs" render={() => (<Dogs api={apiKey} />)} />


        </Switch>
      </div>

    </BrowserRouter>
    );
  }

export default App;
