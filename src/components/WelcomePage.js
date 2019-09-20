import React from "react";
import {Route, Link} from "react-router-dom";
import Character from "./CharacterCard";


export default function WelcomePage() {
  return (
    <section className="welcome-page">
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <Link to={`/character`}>
          <img
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
        </Link>
        <Route path='/character' component={Character} />
      </header>
    </section>
  );
}
