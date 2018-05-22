import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import './App.css';



import NoPics from './NoPics';


import apiKey from './Config.js';
import Cats from './Cats.js';
import Sunsets from './Sunsets.js';
import Dogs from './Dogs.js';
import SearchForm from './SearchForm';
import Nav from './Nav';

const App = () =>{

    return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" render={() => (<SearchForm api={apiKey} />)}/>
          <Route path="/cats" render={() => (<Cats api={apiKey} />)} />
          <Route path="/sunsets" render={() => (<Sunsets api={apiKey} />)} />
          <Route path="/dogs" render={() => (<Dogs api={apiKey} />)} />
          <Route component={NoPics} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }

export default App;
