import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as tripActions from '../actions/tripActions.js'
import axios from 'axios';

class BrowsePlaces extends React.Component {
    constructor(props) {
      super(props);
    }

    componentDidMount(){
        let categoryName = window.location.pathname.split( '/' )[4];

        // this.props.tripState.geolocation

        //api request to google
            //input is category name and locations
    }
      
  render() {
    let places = this.props.tripState.nearbyPlaces
    console.log('all the places!', places)
    console.log('places.data', places.data)
    console.log('typeof nearbyPlaces:', Array.isArray(places))
    console.log(places.length)
    return(
      <div>
        <h1>Browse Places: {this.props.tripState.temp.name}</h1>
        {typeof places.data !== 'undefined' && places.data.map(place => {
            return (
                <div>
                  <h3>{place.name}</h3>
                  <p>rating: {place.rating}</p>
                </div>
            )
        })}
      </div>
    )
  }
}

export default connect(
    state => ({
        tripState: state.tripReducer,
    }),
    dispatch => ({
        actions: bindActionCreators( tripActions , dispatch)
    })
  )(BrowsePlaces);
  