//dependencies
import React, { useEffect } from 'react'
import L from 'leaflet'
import 'leaflet-draw/dist/leaflet.draw.css'
const leafletDraw = require('leaflet-draw')

//componentes
import { Container, MapId, Wrapper } from './style'
import './index.css'

//images
import aiko from '../../assets/aiko.png'

export function Home() {
  useEffect(() => {
    const map = L.map('mapid').setView([-23.5489, -46.6388], 13)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map)

  //Function de pointers
  function onEachFeature(feature, layer) {
    if (feature.properties && feature.properties.popupContent) {
      layer.bindPopup(feature.properties.popupContent)
    }
  }

  const geojsonFeature : GeoJSON.FeatureCollection<any> =  {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          name: 'Coors Field',
          amenity: 'Baseball Stadium',
          popupContent: 'This is where the Rockies play!',
        },
        geometry: {
          type: 'Point',
          coordinates: [-46.5489, -23.5344],
        },
      },
    ],
  }

  L.geoJSON(geojsonFeature, { onEachFeature: onEachFeature }).addTo(map)



})

  return (
    <Wrapper>
      <Container width={[1]}>
        <img src={aiko} className="App-logo" alt="logo" />
      </Container>
      <Container width={[1]}>
        <MapId id="mapid" />
      </Container>
    </Wrapper>
  )
}
