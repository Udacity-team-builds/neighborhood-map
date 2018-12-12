import React, { Component } from 'react';
import './App.css';
import escapeRegExp from 'escape-string-regexp';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import Map from './components/Map';
import axios from 'axios';
import SquareApi from './api';
import 'bootstrap/dist/css/bootstrap.css';
import CatchErrors from './components/CatchErrors';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

library.add(faSearch)

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      allVenues: [],
      venueDetails: [],
      markers: [],
      hiddenMarkers: [],
      query: ''
    };
  }

  componentDidMount() {
    this.getVenues();
  }

  renderMap = () => {
    var index = window.document.getElementsByTagName('script')[0];
    var script = window.document.createElement('script');
    script.src =
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyCcy8mnVTHRmKX8ubNE38RuSV5et15HNiQ&callback=initMap';
    script.async = true;
    script.defer = true;
    index.parentNode.insertBefore(script, index);
    script.onerror = function() {
      alert(
        'There was an error loading the Google Map. Please refresh your page to try again.'
      );
    };
    window.initMap = this.initMap;
  };

  getVenues = () => {
    const endPoint = 'https://api.foursquare.com/v2/venues/explore?';
    const parameters = {
      client_id: 'HK5FLRYBMQ2AO2JYR4VVGU5ZXKB4B0N2B0YLOOGHCKXDD0EZ',
      client_secret: 'SOZXIHAVVLHETXOGTSXOIOA5FKCPWUGNQCW1GC3L5TIF31PK',
      query: 'icecream',
      ll: '37.338208, -121.886329',
      near: 'San Jose, CA',
      v: '20183009',
      limit: 2
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState(
          {
            venues: response.data.response.groups[0].items,
            allVenues: response.data.response.groups[0].items
          },
          this.renderMap(),
        );
      })
      .catch(error => {
        alert('ERROR! ' + error);
        console.log('ERROR! ' + error);
      });
  };

  initMap = () => {
    // Snazzy Maps
    var styles = [
      {
        featureType: 'landscape.man_made',
        elementType: 'geometry',
        stylers: [{ color: '#f9f5ed' }, { saturation: '0' }]
      },
      {
        featureType: 'landscape.natural',
        elementType: 'geometry',
        stylers: [{ color: '#d0e3b4' }]
      },
      {
        featureType: 'landscape.natural.terrain',
        elementType: 'geometry',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'poi',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'poi.attraction',
        elementType: 'all',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'poi.business',
        elementType: 'all',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'poi.medical',
        elementType: 'geometry',
        stylers: [{ color: '#fbd3da' }]
      },
      {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{ color: '#bde6ab' }]
      },
      {
        featureType: 'poi.sports_complex',
        elementType: 'all',
        stylers: [{ visibility: 'on' }]
      },
      {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'road',
        elementType: 'labels',
        stylers: [{ visibility: 'off' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{ color: '#fcfcdd' }, { saturation: '0' }]
      },
      {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#efd151' }, { visibility: 'on' }]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.fill',
        stylers: [{ color: '#ffffff' }]
      },
      {
        featureType: 'road.arterial',
        elementType: 'geometry.stroke',
        stylers: [{ color: '#dcdcdc' }, { visibility: 'on' }]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry.fill',
        stylers: [{ visibility: 'on' }, { color: '#ffffff' }]
      },
      {
        featureType: 'road.local',
        elementType: 'geometry.stroke',
        stylers: [{ visibility: 'on' }, { color: '#dedbd3' }]
      },
      {
        featureType: 'transit.station.airport',
        elementType: 'geometry.fill',
        stylers: [{ color: '#cfb2db' }]
      },
      {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{ color: '#a2daf2' }]
      }
    ];

    // Create a Map
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 37.338208,
        lng: -121.886329
      },
      zoom: 10,
      styles: styles
    });

    // Create an InfoWindow
    const infowindow = new window.google.maps.InfoWindow({ maxWidth: 200 });
    this.infowindow = infowindow;

    // Display Dynamic Markers
    this.state.venues.forEach(myVenue => {
      // Create a Marker Icon
      // const markerImage = 'https://techsnazzy.com/assets/img/ice-cream.png';
      
      const markerImage = require('./imgs/icons/ice-cream-md.png');
      // Create a Marker
      const marker = new window.google.maps.Marker({
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        },
        map: map,
        title: myVenue.venue.name,
        icon: markerImage,
        id: myVenue.venue.id,
        animation: window.google.maps.Animation.DROP
      });

      this.state.markers.push(marker);

      // Click on a Marker
      marker.addListener('click', function() {
        infowindow.setContent(`
        <h4>${myVenue.venue.name}</h4>
        <p>${myVenue.venue.location.address}
        <br>
        ${
          myVenue.venue.location.city
        }, ${myVenue.venue.location.state} ${myVenue.venue.location.postalCode}</p>
        <br>
        <p>
        ${'<a href="https://foursquare.com/v/' +
          myVenue.venue.id +
          '" target="_blank">Learn More...</a>'}
        </p>
        `);

        marker.setAnimation(window.google.maps.Animation.BOUNCE);
        window.setTimeout(function() {
          marker.setAnimation(null);
        }, 1000);

        // Open an InfoWindow
        infowindow.open(map, marker);
      });

      map.addListener('click', function() {
        marker.setAnimation(null);
        infowindow.close(map, marker);
      });
    });
    this.getPhotos();
  };

  markerVisibility = (arr, boo) => {
    return arr.forEach(marker => marker.setVisible(boo));
  };

  handleSearch = query => {
    this.setState({ query });
    let filterVenues;
    let hiddenMarkers;
    this.state.markers.map(marker => marker.setVisible(true));
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      filterVenues = this.state.venues.filter(myVenue =>
        match.test(myVenue.venue.name)
      );
      this.setState({ venues: filterVenues });
      hiddenMarkers = this.state.markers.filter(marker =>
        filterVenues.every(myVenue => myVenue.venue.name !== marker.title)
      );
      this.markerVisibility(hiddenMarkers, false);
      this.setState({ hiddenMarkers });
    } else {
      this.setState({ venues: this.state.allVenues });
      this.markerVisibility(this.state.markers, true);
    }
  };

  // get photos using foursquare api for each venue
  getPhotos = () => {
    this.state.venues.forEach(venue => {

      SquareApi.getVenueDetails(venue.venue.id)
        .then(res => {
          const details = res.response.venue;
          // console.log(res.response.venue.bestPhoto.prefix + '100x100' + res.response.venue.bestPhoto.suffix);
          // const venueMatch = this.state.venues.find(venue => venue.venue.id === photo.id);
          // const newVenue = Object.assign(venueMatch, photo);
          // this.setState({ venueDetails: Object.assign(this.state.venues, newVenue) });
          this.setState(() => this.state.venueDetails.push(details));
        });
    });
  }



  // // get photos using foursquare api for each venue
  // getPhotos = () => {
  //   this.state.venues.forEach(venue => {
  //     // console.log(this.state.venues[0]);

  //     SquareApi.getVenueDetails(venue.venue.id)
  //       .then(res => {
  //         const photo = res.response.venue;
  //         // console.log(res.response.venue.bestPhoto.prefix + '100x100' + res.response.venue.bestPhoto.suffix);
  //         const venueMatch = this.state.venues.find(venue => venue.venue.id === photo.id);
  //         const newVenue = Object.assign(venueMatch, photo);
  //         this.setState({ venues: Object.assign(this.state.venues, newVenue) });
  //       });
  //   });
  // }
  



  render() {
    if (this.state.hasError) {
      return <div aria-label="Error">Oops, Something went wrong!</div>;
    } else {
      return (
        <div className="App" role="main">
          <CatchErrors>
            <Header />
            <div id="container">
              <Map className="p-2 bd-highlight" />
              <SearchBar
                className="d-flex flex-row bd-highlight mb-3"
                markers={this.state.markers}
                searchedVenues={this.searchedVenues}
                query={this.state.query}
                clearQuery={this.clearQuery}
                handleSearch={b => this.handleSearch(b)}
                clickLocation={this.clickLocation}
                venues={this.state.venues}
                venueDetails={this.state.venueDetails}
              />
              
            </div>
          </CatchErrors>
        </div>
      );
    }
  }
}

export default App;
