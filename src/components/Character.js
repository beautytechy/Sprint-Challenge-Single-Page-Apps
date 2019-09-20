import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


export default function Character (props)  {
return (
<div key={props.index}>
<h1>Main Characters: {props.name}</h1>
</div>
)
}

// const [characters, setCharacter] = useState([]);
//   useEffect (() => {
// const getCharacters = () => {
//   axios
//   .get('https://rickandmortyapi.com/api/character/}').then(response => {
//     setCharacter(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });
// }
// getCharacters();
// },[]);

    
// return (
//   <div>
//     {characters.map(item => (

//       <CharacterDetails key={item} item={Character} />
//     ))}
//   </div>
// );
// }

// function CharacterDetails({ item }) {
// console.log(item)
// const { name, species, status } = item;
// return (

  
//   <div>
//     <h2>Name: {name}</h2>
//     <div>
//       Species: <em>{species}</em>
//     </div>
//   </div>

// );
// }
