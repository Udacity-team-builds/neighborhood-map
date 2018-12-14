import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


class DetailsPage extends Component {
  render(){
    return(
      <div>
        <Header />
        <h2>Hello Details</h2>
        <p>need props for dynamic deets</p>
        <p>the link tag can be used to send the props still working out the how???</p>

        {/* ////temporary/////temp */}
        <div id="search-bar" className="bd-highlight">
          <div className='input-container'>
            {/* <FontAwesomeIcon className="filterIcon" icon="search" /> */}
            <Link
              to='/'
            >
              Main Page
          </Link>
          </div>
        </div>
      {/* //////temporary///temp */}
      </div>

      
    );
  }
}
export default DetailsPage;     