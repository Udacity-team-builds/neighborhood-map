import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Map from './components/Map';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      allMarkers: []
    };
  }

  componentDidMount() {
    this.getVenues();
    document.title = 'Bay Area Ice Cream Locator';
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
      near: 'San Jose,CA',
      v: '20182507',
      limit: 15
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
        console.log('ERROR!! ' + error);
      });
  };

  initMap = () => {
    // Create A Map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 37.338208,
        lng: -121.886329
      },
      zoom: 12
    });

    // Create An Info Window
    const infowindow = new window.google.maps.InfoWindow();

    // Display Dynamic Markers
    this.state.venues.forEach(myVenue => {
      const infoString = `
        <h4>${myVenue.venue.name}</h4>
        <p>
          Street Address: ${myVenue.venue.location.address}
        </p>`;

      // Create A Marker
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

      // Click On A Marker
      marker.addListener('click', function() {
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
        setTimeout(() => {
          marker.setAnimation(null);
        }, 1000);
        // Change The Content
        infowindow.setContent(infoString);
        // Open An InfoWindow
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return (
      <div className="App">
        <Header />

        <div className="d-flex flex-row bd-highlight mb-3">
          <SearchBar className="p-2 bd-highlight" venues={this.state.venues} />
          <Map className="p-2 bd-highlight" />
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
