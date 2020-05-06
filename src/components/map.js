import React from 'react'
import GoogleMapReact from 'google-map-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Section, Address, Wrapper } from '../styles/components/MapStyles'

const Marker = () => (
  <FontAwesomeIcon
    style={{
      fontSize: '4em',
      color: '#d8232f',
      transform: 'translate(-20px,-40px)',
    }}
    icon={['fas', 'map-marker-alt']}
  />
)

const Map = () => {
  return (
    <Section>
      <Address>
        <h6>ME WINES SHOP</h6>
        <p>Saladaeng Road</p>
        <p>Mon - Sun, 11am - 12am</p>
        <a href="https://maps.google.com/?daddr=Me Wines Shop" target="_black">
          <FontAwesomeIcon icon={['fas', 'map-marker-alt']} />
          <span>DIRECTIONS</span>
        </a>
      </Address>
      <Wrapper>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBnGWwQJpQ6ip0nf4eDuklqopNQBJ3SPSY' }}
          defaultCenter={{ lat: 13.728229, lng: 100.524929 }} //lat: 13.728736, lng: 100.535754
          defaultZoom={14}
          options={{
            zoomControl: false,
            gestureHandling: 'none',
            fullscreenControl: false,
            styles: [{ stylers: [{ saturation: -100 }] }],
          }}
        >
          <Marker lat={13.728736} lng={100.535754} />
        </GoogleMapReact>
      </Wrapper>
    </Section>
  )
}

export default Map
