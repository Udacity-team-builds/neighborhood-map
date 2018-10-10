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
<<<<<<< HEAD
    let showingVenues;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingVenues = this.props.venues.filter(venue => match.test(venue.name));
    } else {
      showingVenues = this.props.venues;
    }

||||||| merged common ancestors
=======
    let showingVenues;
    if (this.state.query) {
      const match = new RegExp(escapeRegExp(this.state.query), 'i');
      showingVenues = this.props.venues.filter(venue => match.test(venue.name));
    } else {
      showingVenues = this.props.venues;
    }
>>>>>>> temp-work
    return (
      <div id="search-bar" className="p-2 bd-highlight">
<<<<<<< HEAD
        <div className="list-group">
          <input
            className="form-control"
            type="text"
            value={this.state.query}
            onChange={e => this.updateQuery(e.target.value)}
            aria-label="Text input"
            placeholder="Filtered search"
          />
        </div>
        <ul>
          {showingVenues.map(showingVenue => (
            <li key={showingVenue.venue.id}>
              <p>{showingVenue.venue.name}</p>
            </li>
          ))}
||||||| merged common ancestors
        <ul>
          <li>Item X</li>
          <li>Item X</li>
          <li>Item X</li>
          <li>Item X</li>
          <li>Item X</li>
          <li>Item X</li>
=======
        <div>
          <input
            className="form-control text-center"
            type="text"
            value={this.state.query}
            onChange={event => this.updateQuery(event.target.value)}
            placeholder="Search Venues"
          />
        </div>
        <ul className="list-group">
          {showingVenues.map(showingVenue => (
            <li key={showingVenue.venue.id} className="list-group-item">
              <p>{showingVenue.venue.name}</p>
            </li>
          ))}
>>>>>>> temp-work
        </ul>
      </div>
    );
  }
}

export default SearchBar;
