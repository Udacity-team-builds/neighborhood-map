import React, { Component } from 'react';

class SearchBar extends Component {
  openInfo = locationId => {
    this.props.markers.forEach(marker => {
      if (marker.id === locationId) {
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
          placeholder="Search for Ice Cream"
          aria-label="Search for Ice Cream"
          value={this.props.query}
          onChange={event => this.props.handleSearch(event.target.value)}
        />
        <ul className="list-group">
          {this.props.venues.map(site => (
            <li
              className="list-group-item"
              role="menuitem"
              onClick={() => {
                this.openInfo(site.venue.id);
              }}
              aria-label={site.venue.name}
              tabIndex="0"
              id={site.venue.id}
              key={site.venue.id}
            >
              <br />
              <b>{site.venue.name}</b>
              <br />
              <i>{site.venue.location.address}</i>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
