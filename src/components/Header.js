import React from "react";
import { withRouter } from "react-router-dom";

function Header({ selectedPokemon, page, history, catchedPokemon }) {
  // console.log(history.length);
  const backButtonVisible = history.length < 1 ? "vis-hidden" : "";

  // backButtonVisible();

  const headerTitle = () => {
    let title;
    if (selectedPokemon.name) {
      title = selectedPokemon.name;
    } else if (page === "PokemonList") {
      title = "Pokécatch";
    } else if (page === "MyPokemon") {
      title = "My Pokemon";
    } else {
      console.log("pokecatch because " + page);
      title = "Pokécatch";
    }
    return title;
  };
  return (
    <header>
      <span
        id="back-button"
        onClick={() => history.goBack()}
        className={backButtonVisible}
      >
        &lt; Back
      </span>
      <h1>{headerTitle()}</h1>
      <span id="total-pokemon">{catchedPokemon.length}</span>
    </header>
  );
}

export default withRouter(Header);
