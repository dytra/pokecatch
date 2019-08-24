import React, { Component } from "react";
import PokemonList from "./PokemonList";
import MyPokemon from "./MyPokemon";
import PokemonDetail from "./PokemonDetail";
import { Route } from "react-router-dom";
function Main({
  currentPage,
  selectedPokemon,
  setSelectedPokemon,
  setCatchedPokemon,
  pokemons,
  catchedPokemon,
  setPage
}) {
  const pages = {
    PokemonList: PokemonList,
    MyPokemon: MyPokemon,
    PokemonDetail: PokemonDetail
  };
  const CurrentPage = pages[currentPage];
  return (
    <div className="main">
      <Route
        exact
        path="/"
        render={() => (
          <PokemonList
            setPage={setPage}
            selectedPokemon={selectedPokemon}
            pokemons={pokemons}
            setSelectedPokemon={setSelectedPokemon}
          />
        )}
      />
      <Route
        path="/detail/:pname"
        render={params => (
          <PokemonDetail
            setPage={setPage}
            selectedPokemon={selectedPokemon}
            pokemons={pokemons}
            catchedPokemon={catchedPokemon}
            setSelectedPokemon={setSelectedPokemon}
            setCatchedPokemon={setCatchedPokemon}
            params={params}
          />
        )}
      />

      <Route
        exact
        path="/my"
        render={() => (
          <PokemonList
            setPage={setPage}
            selectedPokemon={selectedPokemon}
            pokemons={catchedPokemon}
            setSelectedPokemon={setSelectedPokemon}
          />
        )}
      />

      {/* <CurrentPage
        setPage={setPage}
        selectedPokemon={selectedPokemon}
        pokemons={pokemons}
        setSelectedPokemon={setSelectedPokemon}
      /> */}
    </div>
  );
}

export default Main;
