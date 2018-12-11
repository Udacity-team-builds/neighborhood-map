import React, { Component } from 'react';

export default class VenueImage extends Component {
render(){

  // const myObj = {...this.props.details.bestPhoto};
  // let photo = myObj.prefix + '100x100' + myObj.suffix;
  // const idx = this.props.id;
  return(
    <div>
      {/* <img src={photo} alt='venue'/> */}
      <img className="info-image"
                src={`${this.props.venueDetails.bestPhoto.prefix}100x100${this.props.venueDetails.bestPhoto.suffix}`}
                alt={'venue'} /> 
      {/* {this.props.venueDetails &&
        this.props.venueDetails.map((venue, idx) => (
         
        ))} */}
    </div>
    );
  } 
}
// export default VenueImage;