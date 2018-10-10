import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Map from './components/Map';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
      venues: []
    };
  }

  componentDidMount() {
<<<<<<< HEAD
    this.getVenues();
    document.title = 'My Favorite Bay Area Ice Cream Places';
||||||| merged common ancestors
    this.localPlaces();
    document.title = 'Places around the South Bay Area';
=======
    this.getVenues();
    document.title = 'Bay Area Ice Cream Locator';
>>>>>>> temp-work
  }

  renderMap = () => {
    const GoogleMapsAPI = 'AIzaSyCcy8mnVTHRmKX8ubNE38RuSV5et15HNiQ';
    loadScript(
      `https://maps.googleapis.com/maps/api/js?libraries=geometry,drawing&key=${GoogleMapsAPI}&v=3&callback=initMap`
    );
    window.initMap = this.initMap;
  };

<<<<<<< HEAD
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
||||||| merged common ancestors
  localPlaces = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
    const parameters = {
      client_id: 'HK5FLRYBMQ2AO2JYR4VVGU5ZXKB4B0N2B0YLOOGHCKXDD0EZ',
      client_secret: 'SOZXIHAVVLHETXOGTSXOIOA5FKCPWUGNQCW1GC3L5TIF31PK',
      query: 'icecream',
      near: 'San Jose,CA',
      v: '20182507'
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState(
          {
            venues: response.data.response.groups[0].items
          },
          this.startMap()
        );
      })
      .catch(error => {
        console.log(
          'ERROR: ' + error + '. Please refresh your page to try again.'
        );
      });
=======
  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
    const parameters = {
      client_id: 'HK5FLRYBMQ2AO2JYR4VVGU5ZXKB4B0N2B0YLOOGHCKXDD0EZ',
      client_secret: 'SOZXIHAVVLHETXOGTSXOIOA5FKCPWUGNQCW1GC3L5TIF31PK',
      query: 'icecream',
      ll: '37.338208, -121.886329',
      near: 'San Jose,CA',
      v: '20182507',
      limit: 10
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
>>>>>>> temp-work
  };

<<<<<<< HEAD
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
||||||| merged common ancestors
  initMap = () => {
    // Create An Info Window
    let infowindow = new window.google.maps.InfoWindow();

    // Create A Map
=======
  initMap = () => {
    // Snazzy Maps
    var styles = [
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry',
        stylers: [
          {
            color: '#f9f5ed'
          },
          {
            saturation: '0'
          }
        ]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [
          {
            color: '#d0e3b4'
          }
        ]
      },
      {
        featureType: 'landscape.natural.terrain',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'poi.business',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'poi.medical',
        elementType: 'geometry',
        stylers: [
          {
            color: '#fbd3da'
          }
        ]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
          {
            color: '#bde6ab'
          }
        ]
      },
      {
        featureType: 'poi.sports_complex',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#fcfcdd'
          },
          {
            saturation: '0'
          }
        ]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#efd151'
          },
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.stroke',
        stylers: [
          {
            color: '#dcdcdc'
          },
          {
            visibility: 'on'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry.fill',
        stylers: [
          {
            visibility: 'on'
          },
          {
            color: '#ffffff'
          }
        ]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'on'
          },
          {
            color: '#dedbd3'
          }
        ]
      },
      {
        featureType: 'transit.station.airport',
        elementType: 'geometry.fill',
        stylers: [
          {
            color: '#cfb2db'
          }
        ]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
          {
            color: '#a2daf2'
          }
        ]
      }
    ];
    // Create A Map
>>>>>>> temp-work
    const map = new window.google.maps.Map(document.getElementById('map'), {
<<<<<<< HEAD
      center: { lat: 37.338208, lng: -121.886329 },
      zoom: 14
||||||| merged common ancestors
      center: { lat: 37.338208, lng: -121.886329 },
      zoom: 12
=======
      center: {
        lat: 37.338208,
        lng: -121.886329
      },
      zoom: 12,
      styles: styles
>>>>>>> temp-work
    });
<<<<<<< HEAD
    const infowindow = new window.google.maps.InfoWindow();
||||||| merged common ancestors

    // Display Dynamic Markers
=======

    // Create An Info Window
    const infowindow = new window.google.maps.InfoWindow();

    // Display Dynamic Markers
>>>>>>> temp-work
    this.state.venues.forEach(myVenue => {
<<<<<<< HEAD
      const infoString = `<h4>${myVenue.venue.name}</h4><p>Street Address: ${
        myVenue.venue.location.address
      }</p><p>Distance from Harpa: ${
        myVenue.venue.location.distance
      } meters</p>`;
      const marker = new window.google.maps.Marker({
||||||| merged common ancestors
      let nameOfVenue = `${myVenue.venue.name}`;

      // Create A Marker
      let marker = new window.google.maps.Marker({
=======
      const infoString = `
        <h4>${myVenue.venue.name}</h4>
        <p>${myVenue.venue.location.address}<br>${
        myVenue.venue.location.city
      }, ${myVenue.venue.location.state} ${
        myVenue.venue.location.postalCode
      }</p>
        `;
      const markerImage = 'http://techsnazzy.com/assets/img/ice-cream.png';
      // Create A Marker
      const marker = new window.google.maps.Marker({
>>>>>>> temp-work
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        },
        map: map,
<<<<<<< HEAD
        title: myVenue.venue.name,
        id: myVenue.venue.id,
        animation: window.google.maps.Animation.DROP
||||||| merged common ancestors
        animation: window.google.maps.Animation.DROP,
        title: myVenue.venue.name
=======
        title: myVenue.venue.name,
        icon: markerImage,
        id: myVenue.venue.id,
        animation: window.google.maps.Animation.DROP
>>>>>>> temp-work
      });
      marker.addListener('click', function() {
<<<<<<< HEAD
        if (marker.getAnimation() !== null) {
          marker.setAnimation(null);
        } else {
          marker.setAnimation(window.google.maps.Animation.BOUNCE);
        }
        setTimeout(() => {
          marker.setAnimation(null);
        }, 1000);
        infowindow.setContent(infoString);
||||||| merged common ancestors
        // Change The Content
        infowindow.setContent(nameOfVenue);

        // Open An InfoWindow
=======
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
>>>>>>> temp-work
        infowindow.open(map, marker);
      });
    });
  };

  render() {
    return (
<<<<<<< HEAD
      <div id="app-container"className="app">
||||||| merged common ancestors
      <div className="app">
=======
      <div className="App">
        <Header />

>>>>>>> temp-work
        <div className="d-flex flex-row bd-highlight mb-3">
<<<<<<< HEAD
          <Header />
          <SearchBar venues={this.state.venues} />
          <Map />
||||||| merged common ancestors
          <Header />
          <SearchBar />
          <Map />
=======
          <SearchBar className="p-2 bd-highlight" venues={this.state.venues} />
          <Map className="p-2 bd-highlight" />
>>>>>>> temp-work
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
