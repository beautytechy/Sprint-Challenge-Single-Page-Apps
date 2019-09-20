import React, { useState, useEffect } from "react";
import Header from "./components/Header.js";
import axios from "../node_modules/axios";
import CharacterCard from "./components/CharacterCard";
import { Route } from "react-router-dom";
import WelcomePage from "./components/WelcomePage";
import Character from "./components/Character";
// import SearchForm from "./components/SearchForm"



export default function App() {
  const [characterInfo, setCharacterInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/`).then(response => {

        const characterInfo = response.data.results;
        console.log(response);
        setCharacterInfo(characterInfo);

      })
      .catch(error => {
        console.log("API data was not returned", error);
      });
  }, []);
  return (
    <main>
      <Header />
      <WelcomePage />
      <Character />
  
    

      <div>
        {characterInfo.map(info => {
          console.log(info);
          return (
            <CharacterCard
              key={info.index}
              name={info.name}
              species={info.species}
              status={info.status}
            />


          )
        })
        }
        <Route exact path="/" component={WelcomePage} />
        <Route path="/character" render={props => <CharacterCard {...props} character={characterInfo} />}
        />
      </div>
      
    </main>
  )
}