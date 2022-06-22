//dependencies
import React, { useEffect } from 'react';
import L from "leaflet";
import "leaflet-draw/dist/leaflet.draw.css";
const leafletDraw = require('leaflet-draw');

//componentes
import { Container, MapId, Wrapper } from './style';
import './index.css';

//images
import aiko from '../../assets/aiko.png';

export function Home(){
  useEffect(() => {
    const map = L.map('mapid').setView([51.505, -0.09], 13);
   L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
       attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
   }).addTo(map);


  // FeatureGroup is to store editable layers
  const drawnItems = new L.FeatureGroup();
  map.addLayer(drawnItems);
  const drawControl = new L.Control.Draw({
      edit: {
          featureGroup: drawnItems
      }
  });
  map.addControl(drawControl);


  });
  return(
    <Wrapper>
      <Container width={[1]}>
        <img src={aiko} className="App-logo" alt="logo" />
      </Container>
      <Container width={[1]}>
        <MapId id="mapid"/>
      </Container>
    </Wrapper>
  )
}
