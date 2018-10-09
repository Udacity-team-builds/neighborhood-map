import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Map from './components/Map';
import axios from 'axios';

class App extends Component {
  state = {
      venues: []
    };
  }

  componentDidMount() {
    this.getVenues();
    document.title = 'My Favorite Bay Area Ice Cream Places';
  }

  renderMap = () => {
    const GoogleMapsAPI = 'AIzaSyCcy8mnVTHRmKX8ubNE38RuSV5et15HNiQ';
    loadScript(
      `https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=${GoogleMapsAPI}&v=3&callback=initMap`
    );
    window.initMap = this.initMap;
  };

getVenues = () => {
  const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
  const parameters = {
    client_id: 'HK5FLRYBMQ2AO2JYR4VVGU5ZXKB4B0N2B0YLOOGHCKXDD0EZ',
    client_secret: 'SOZXIHAVVLHETXOGTSXOIOA5FKCPWUGNQCW1GC3L5TIF31PK',
    query: 'icecream',
    ll: '37.338208, -121.886329',
    radius: '1000',
    v: '20180910',
    limit: 12
  };

  axios
    .get(endPoint + new URLSearchParams(parameters))
    .then(response => {
      this.setState(
        {
          venues: response.data.response.groups[0].items
        },
        this.renderMap()
      );
    })
    .catch(error => {
      console.log('ERROR! ' + error);
    });
};

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.338208, lng: -121.886329 },
      zoom: 14
    });
    const infowindow = new window.google.maps.InfoWindow();
    this.state.venues.forEach(myVenue => {
      const infoString = `<h4>${myVenue.venue.name}</h4><p>Street Address: ${
        myVenue.venue.location.address
      }</p><p>Distance from Harpa: ${
        myVenue.venue.location.distance
      } meters</p>`;
      const marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        },
        map: map,
        title: myVenue.venue.name,
        id: myVenue.venue.id,
        animation: window.google.maps.Animation.DROP
      });
      marker.addListener('click', function() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
        setTimeout(() => {
          marker.setAnimation(null);
        }, 1000);
        infowindow.setContent(infoString);
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return (
      <div id="app-container"className="app">
        <div className="d-flex flex-row bd-highlight mb-3">
          <Header />
          <SearchBar venues={this.state.venues} />
          <Map />
        </div>
      </div>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName('script')[0];
  var script = window.document.createElement('script');
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

export default App;
