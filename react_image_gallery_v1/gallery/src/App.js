import React from 'react';
//import react router
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';
import SearchForm from './SearchForm.js';

//import api key and import the components

import Header from './Header.js';
import apiKey from './Config.js';
import Cats from './Cats.js';
import Sunsets from './Sunsets.js';
import Dogs from './Dogs.js';
import NoResults from './NoResults';



//switch ----it returns only the first matching route
const App = () =>{

    return (
    <BrowserRouter>
      <div className="container">
      <Header/>
          <Switch>

          <Route path="/cats" render={() => (<Cats api={apiKey} />)} />
          <Route path="/sunsets" render={() => (<Sunsets api={apiKey} />)} />
          <Route path="/dogs" render={() => (<Dogs api={apiKey} />)} />
      

        </Switch>
      </div>

    </BrowserRouter>
    );
  }

export default App;
