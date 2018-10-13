import React, { Component } from 'react';

class SearchBar extends Component {
  openInfo = venueId => {
    this.props.markers.forEach(marker => {
      if (marker.id === venueId) {
        window.google.maps.event.trigger(marker, 'click');
      }
    });
  };

  render() {
    return (
      <div id="search-bar" className="p-2 bd-highlight">
        <input
          className="form-control text-center"
          type="text"
          autoFocus
          placeholder="Search"
          aria-label="Search for Ice Cream"
          value={this.props.query}
          onChange={event => this.props.handleSearch(event.target.value)}
        />
        <ul className="list-group">
          {this.props.venues.map(listVenues => (
            <li
              className="list-group-item"
              role="menuitem"
              onClick={() => {
                this.openInfo(listVenues.venue.id);
              }}
              aria-label={listVenues.venue.name}
              tabIndex="0"
              id={listVenues.venue.id}
              key={listVenues.venue.id}
            >
              <h4 className="venue-header text-center">
                {listVenues.venue.name}
              </h4>
              <p className="venue-text text-center">
                {listVenues.venue.location.address}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
