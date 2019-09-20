import React from "react";

export default function CharacterCard(props) {
  
    console.log(props)
  return <span key={props.index}>
    <h1>{props.name}</h1>
    <p>{props.species}</p>
    <p>{props.status}</p>
   
  </span>;
}
