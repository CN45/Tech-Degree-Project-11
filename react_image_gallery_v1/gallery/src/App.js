import React from 'react';
//import react router
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';

//deleted search form
//import api key and import the components
import NoResults from './NoResults';


import apiKey from './Config.js';
import Cats from './Cats.js';
import Sunsets from './Sunsets.js';
import Dogs from './Dogs.js';
import SearchForm from './SearchForm.js';
import Header from './Header.js';
import Footer from './Footer';

//switch ----it returns only the first matching route
const App = () =>{

    return (
    <BrowserRouter>
      <div className="container">
      <Header />
      <Footer />
          <Switch>
          <Route exact path="/" render={() => (<SearchForm api={apiKey} />)}/>
          <Route path="/cats" render={() => (<Cats api={apiKey} />)} />
          <Route path="/sunsets" render={() => (<Sunsets api={apiKey} />)} />
          <Route path="/dogs" render={() => (<Dogs api={apiKey} />)} />
          <Route component={NoResults} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }

export default App;
