import React, {Component} from 'react';
import { Map,  Marker, GoogleApiWrapper } from 'google-maps-react';
import { faAlignRight } from '@fortawesome/free-solid-svg-icons';
export class GoogleMap extends Component {
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map style={{width:'60%',marginTop:'1%',height:'80%'}} google={this.props.google}
            onClick={this.onMapClicked}>
          <Marker onClick={this.onMarkerClick}
                  name={'Current location'} />
   
          
        </Map>
      )
    }
  }


export default GoogleApiWrapper({
    apiKey: ('AIzaSyApsXgBR_2We_YHP7kNI7J--35JExifBts')
  })(GoogleMap)