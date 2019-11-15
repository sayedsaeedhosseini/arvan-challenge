import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { setRTLTextPlugin } from 'mapbox-gl';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import marker from '../../images/map-marker@2x.png';
import './LocationMap.css';

setRTLTextPlugin(
  'https://www.parsimap.com/scripts/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.0/mapbox-gl-rtl-text.js',
);

const Mapbox = ReactMapboxGl({
  minZoom: 8,
  maxZoom: 15,
  accessToken: process.env.PARSIMAP_TOKEN_ENV,
});

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
`;

function LocationMap({ geoPoints }) {
  return (
    <Wrapper>
      <Mapbox
        style="https://www.parsimap.com/styles/mapbox/street.json"
        containerStyle={{ flex: 1 }}
        center={[geoPoints[1], geoPoints[0]]}
        zoom={[15]}
        className="location-map"
      >
        <Marker coordinates={[geoPoints[1], geoPoints[0]]} anchor="center">
          <img
            src={marker}
            alt="merchant map marker"
            style={{
              position: 'relative',
              top: '50%',
              left: '50%',
              width: '4.2rem',
              height: '5.5rem',
              marginLeft: '-2.1rem',
              marginTop: '-7.25rem',
            }}
          />
        </Marker>
      </Mapbox>
    </Wrapper>
  );
}

LocationMap.propTypes = {
  geoPoints: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default LocationMap;
