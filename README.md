# Neighborhood Map Project 7 for Udacity FEND

This is Project 7 for the Udacity FEND course. This application uses the Google Maps API to insert a map and the map location markers. It also uses the Foursquare Developer API to fetch the location information. In this map, I am locating ice cream shops near San Jose, CA. You will get a list of shops and you can type in some text to filter the location.

## Table of Contents

- [Creation](#creation)
- [Instructions](#instructions)
- [Dependencies](#dependencies)
- [Resources](#resources)
- [Notes](#notes)
- [License](#license)

## Creation

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Instructions

1. First, go ahead and `fork` this repo and then `clone` it to your computer.
2. Then, `cd` into the directory and `npm install` and then `npm start` to run the App in your web browser.

```
git clone https://github.com/TechSnazzy/neighborhood-map
cd neighborhood-map
npm install
npm start
```

## Dependencies

- Bootstrap: [https://www.npmjs.com/package/bootstrap](https://www.npmjs.com/package/bootstrap)
- Snazzy Maps: [https://snazzymaps.com/](https://snazzymaps.com/)
- Google Maps API: [https://developers.google.com/maps/documentation/javascript/tutorial](https://developers.google.com/maps/documentation/javascript/tutorial)
- Google Maps API Geocode Tool: [Find the LatLong of a location](https://google-developers.appspot.com/maps/documentation/utils/geocoder/)
- Google Maps API Markers: [Markers](https://developers.google.com/maps/documentation/javascript/markers)
- Google Maps API Info Windows: [Info Windows](https://developers.google.com/maps/documentation/javascript/infowindows)
- Foursquare Developers: [https://developer.foursquare.com/](https://developer.foursquare.com/)
- Axios: [Promise based HTTP client for the browser and node.js](https://github.com/axios/axios)

## Resources

- Elharony's YouTube walkthrough: [Udacity | Neighborhood Map - Intro and Creating our React App](https://www.youtube.com/watch?v=ywdxLNjhBYw&t=1s)
- Forrest Walker's YouTube walkthrough: [Neighborhood Map - Setup Project](https://www.youtube.com/watch?v=ktc8Gp9jD1k&list=PL4rQq4MQP1crXuPtruu_eijgOUUXhcUCP)

## Notes

This app was scaffolded using `create-react-app`. By default, this application runs in a development build which does come with a Service Worker. The Service Worker will only work in the production build. You can download and create a production build by running the following commands.

```
npm run build
```

## License

MIT LicenseMIT License

Copyright (c) 2018 [Sean Morrison](https://techsnazzy.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
