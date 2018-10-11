import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

class SearchBar extends Component {
  state = {
    query: ''
  };

  updateQuery = query => {
    this.setState({ query: query.trim() });
  };
  render() {
    let showingVenues;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingVenues = this.props.venues.filter(element =>
        match.test(element.venue.name)
      );
    } else {
      showingVenues = this.props.venues;
    }
    return (
      <div id="search-bar" className="p-2 bd-highlight">
        <div>
          <label for="searchVenuesInput" />
          <input
            name="searchVenuesInput"
            className="form-control text-center"
            type="text"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
            placeholder="Search Venues"
            tabIndex={1}
          />
        </div>
        <ul className="list-group">
          {showingVenues.map(showingVenue => (
            <li key={showingVenue.venue.id} className="list-group-item">
              <p>{showingVenue.venue.name}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default SearchBar;
