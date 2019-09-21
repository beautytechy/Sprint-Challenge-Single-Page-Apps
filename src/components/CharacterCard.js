import React from "react";
import styled from 'styled-components';

const BlueH1 = styled.h1`
color: blue;
font-size: 1.5 rem;
`;

export default function CharacterCard(props) {
  
  return <span key={props.index}>
    <BlueH1>{props.name}</BlueH1>
    <p>{props.species}</p>
    <p>{props.status}</p>
  </span>;
}
