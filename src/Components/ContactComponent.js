import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

const Marker = props => {
    return (
      <React.Fragment>
          <img src='/img/marker.png' alt="map marker" height="30"  />
          <div>Captains Tavern</div>
      </React.Fragment>
    
    );
}

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lng: -82.58161111995476,
      lat: 28.113971854591874
    },
    zoom: 17.5
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '400px', width: '600px' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBrKQhxCmZa6_lIUgSH2_8ALYai40W6tF4'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <Marker lat={28.114191854591874} lng={-82.58241111995476}></Marker>
        </GoogleMapReact>
      </div>
    );
  }
}
  
function Contact () {
  return (
      <React.Fragment>
          <div class="contact-container">
            <div class="row">
                <div class="map-captains">
                  <SimpleMap></SimpleMap>
                </div>
                <div class="contact">
                  <div class="row">
                      <div class="col-3" style={{paddingLeft:'16px'}}>
                          <h1>Phone:</h1>
                      </div>
                      <div class="col-8">
                          <h2 style={{paddingTop:'10px', paddingLeft:'37px'}}>813.328.4835</h2>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3" style={{paddingLeft:'22px'}}>
                          <h1>Email:</h1> 
                      </div>
                      <div class="col-8">
                          <h2 style={{paddingTop:'13px', paddingLeft:'42px'}}>staff@captainstavern.pub</h2>
                      </div> 
                  </div>
                  <div class="row">
                      <div class="col-3" style={{paddingLeft:'0px'}}>
                          <h1>Address:</h1>
                      </div>
                      <div class="col-9">
                          <h2 style={{paddingTop:'0px', paddingLeft:'35px'}}>8742 North Mobley Rd (Fox's Corner Plaza){<br/>}Odessa, Florida 33556</h2>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-3" style={{paddingLeft:'18px'}}>
                          <h1>Social:</h1> 
                      </div>
                      <div class="col-8">
                          <h2 style={{paddingTop:'12px', paddingLeft:'46px'}}>facebook.com/captainstavernodessa{<br/>}instagram.com/captains_tavern</h2>
                      </div>
                  </div>
                </div>
              </div>
          </div>   
      </React.Fragment>
    )
}

export default Contact