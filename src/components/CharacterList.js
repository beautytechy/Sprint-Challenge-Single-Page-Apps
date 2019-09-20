import React, { useEffect, useState } from "react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <section className="character-list">
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
        <Route path="/character/:id" component={Character} />
      </div>
    </section>
  );
}
