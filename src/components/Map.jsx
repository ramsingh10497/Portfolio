import React from 'react';
import styled from 'styled-components';
import MapImg from '../Map.png';
import Ptext from './Ptext';

const MapStyles = styled.div`
  background: url(${MapImg}) no-repeat;
  background-position: center;
  background-size: cover;
  min-height: 400px;
  margin-bottom: 1rem;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 35%;
    bottom: 7%;
    padding: 2rem;
    background: grey;
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
    /* margin-bottom: 10rem; */
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-align: center;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
    color: black;
    text-align: center;
  }
  .map__card__link:hover{
    color: forestgreen;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      /* max-width: none; */
      right: auto;
      width: 50vw;
    }
  }
`;

export default function Map() {
  return (
    <MapStyles>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <Ptext>Asansol, West Bengal, India</Ptext>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/23%C2%B041'01.2%22N+86%C2%B056'29.6%22E/@23.6836607,86.941016,19z/data=!3m1!4b1!4m5!3m4!1s0x0:0x0!8m2!3d23.6836595!4d86.9415645?hl=en"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}