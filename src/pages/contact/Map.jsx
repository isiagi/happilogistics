import React from "react";
import { GoogleMap, LoadScript, MarkerF } from "@react-google-maps/api";
// import { Polyline } from '@react-google-maps/api';
// AIzaSyAArBzVCXw8OSDV3GNDtoKLzcGCasWGaUQ

const containerStyle = {
  maxWidth: "500px",
  height: "400px",
};

const center = {
  lat: 0.31669,
  lng: 32.57582,
};

// const onLoad = polyline => {
//   console.log('polyline: ', polyline)
// };

// const path = [
//   { lat: 0.322985114134563, lng: 32.57803308928811 },
//   { lat: 0.32392322993485073, lng:  32.576373751871465}
// ];

// const options = {
//   strokeColor: '#FF0000',
//   strokeOpacity: 0.8,
//   strokeWeight: 2,
//   fillColor: '#FF0000',
//   fillOpacity: 0.35,
//   clickable: false,
//   draggable: false,
//   editable: false,
//   visible: true,
//   radius: 30000,
//   paths: [
//     { lat: 0.322985114134563, lng: 32.57803308928811 },
//     { lat: 0.32392322993485073, lng:  32.576373751871465}
//   ],
//   zIndex: 1
// };

function MapComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyAArBzVCXw8OSDV3GNDtoKLzcGCasWGaUQ">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        <MarkerF label="Ambassador House" position={{ lat: 0.31785329510040194, lng: 32.57552968097116 }} />
        {/* <Marker label="destination" position={{ lat: 0.32392322993485073, lng:  32.576373751871465}} />
        <Polyline
      onLoad={onLoad}
      path={path}
      options={options}
    /> */}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapComponent;
