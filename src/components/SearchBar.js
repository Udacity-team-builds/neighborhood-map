import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

class SearchBar extends Component {
  openInfo = venueId => {
    this.props.markers.forEach(marker => {
      if (marker.id === venueId) {
        window.google.maps.event.trigger(marker, 'click');
      }
    });
  };


  render() {
    // var match = this.props.match;

    return (
      <div id="search-bar" className="bd-highlight">
        <div className='input-container'>
          <FontAwesomeIcon className="filterIcon" icon="search" />
          <input
          className="form-control form-control-sm text-center"
          type="text"
          autoFocus
          placeholder="Search"
          aria-label="Search for Ice Cream"
          value={this.props.query}
          onChange={event => this.props.handleSearch(event.target.value)}
        />
          
        </div>
        <ul className="p-2 list-group">
          
          {this.props.venues.map((listVenues, index) => (
            
            <li
              className="list-item"
              role="menuitem"
              onClick={() => {
                this.openInfo(listVenues.venue.id);
              }}
              aria-label={listVenues.venue.name}
              tabIndex="0"
              id={listVenues.venue.id}
              key={listVenues.venue.id}
            >
              {/* image from venue details */}
              <div className="venue-image">
                {this.props.venueDetails.map(venue =>{
                  if(venue.id === listVenues.venue.id){
                    return <img
                      key={venue.id}
                     src={venue.bestPhoto.prefix + '72x72' + venue.bestPhoto.suffix}
                     alt={venue.name}
                     />;
                  }
                })                  
                }
              </div>

              <div className='venue-info'>
                <h4 className="venue-header text-center">
                  {listVenues.venue.name}
                </h4>
                <p className="venue-text text-center">
                  {listVenues.venue.location.address}
                </p>
                
                <div>
                  <Link
                    className='button'
                    key={listVenues.venue.id}
                    to={{
                      pathname: '/details', 
                      state: {
                        details: this.props.venueDetails[index]
                      }
                    }}
                  >
                    View Details
                  </Link>
                </div>
              

              {/* {listVenues && 
                <Link
                  className='button'
                  to={{
                    pathname: match.url + '/details',
                    search: `?details=` + listVenues.venue.name
                  }}>
                  View Details
                </Link>
                }  */}

                {/* <button
                  key={listVenues.venue.id}
                >View Details</button> */}
              </div>    
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
