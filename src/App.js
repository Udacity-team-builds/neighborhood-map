import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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
  }

  renderMap = () => {
    loadScript(
      'https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=AIzaSyCcy8mnVTHRmKX8ubNE38RuSV5et15HNiQ&v=3&callback=initMap'
    );
    window.initMap = this.initMap;
  };

  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
    const parameters = {
      client_id: 'HK5FLRYBMQ2AO2JYR4VVGU5ZXKB4B0N2B0YLOOGHCKXDD0EZ',
      client_secret: 'SOZXIHAVVLHETXOGTSXOIOA5FKCPWUGNQCW1GC3L5TIF31PK',
      query: 'food',
      near: 'San Jose',
      v: '20182507'
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
    var map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 37.338208, lng: -121.886329 },
      zoom: 13
    });

    // Create An Info Window
    var infowindow = new window.google.maps.InfoWindow();

    // Display Dynamic Markers
    this.state.venues.map(myVenue => {
      var contentString = `${myVenue.venue.name}`;

      // Create A Marker
      var marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        },
        map: map,
        title: myVenue.venue.name
      });

      // Click On A Marker
      marker.addListener('click', function() {
        // Change The Content
        infowindow.setContent(contentString);

        // Open An InfoWindow
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return (
      <main>
        <div id="map" />
      </main>
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
