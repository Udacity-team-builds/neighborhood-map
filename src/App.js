import React, { Component } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import DetailsPage from './components/DetailsPage';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
var ReactRouter = require('react-router-dom');
var Route = ReactRouter.Route;

library.add(faSearch)

class App extends Component {

  render() {
    
      return (
        <div className="App" role="main">

        {/* main page */}
          <Route exact path='/' component={MainPage} />

          {/* Dynamic venue details page */}
          <Route path='/details' render={(props) => (
            <DetailsPage {...props} />
          )} 
          />
        </div>
      );
  }
}

export default App;
