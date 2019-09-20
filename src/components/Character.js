import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";


const Character = (props) => {
  
  const id = props.match.params.id;
  const [character, setCharacter] = useState({});
  
  console.log(props)
  useEffect(() => {


    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then(response => {
        setCharacter(response.data);
      })
      .catch(error => {
        console.error(error);
      });

  }, [id]);

  const { name, species, status } = character;
  return (

    <div>
      <h2>{name}</h2>
      <div>
        Species: <em>{species}</em>
      </div>
      <div>
        Status: <strong>{status}</strong>
      </div>
    </div>


  );
}

// <Link to="/"><div>Home</div></Link>
export default Character