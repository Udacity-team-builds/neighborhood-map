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
      showingVenues = this.props.venues.filter(venue => match.test(venue.name));
    } else {
      showingVenues = this.props.venues;
    }

    return (
      <div id="search-bar" className="p-2 bd-highlight">
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
        </ul>
      </div>
    );
  }
}

export default SearchBar;
