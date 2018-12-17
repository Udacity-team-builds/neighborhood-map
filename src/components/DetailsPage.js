import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';


class DetailsPage extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     venues: [],
  //     // allVenues: [],
  //     venueDetails: [],
  //     // markers: [],
  //     // hiddenMarkers: [],
  //     // query: ''
  //   };
  // }

  render(){
    const { details } = this.props.location.state;
    return(
      <div>
        <Header />
        <h2>{details.name}</h2>
        <img src={details.bestPhoto.prefix + '72x72' + details.bestPhoto.suffix}/>

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