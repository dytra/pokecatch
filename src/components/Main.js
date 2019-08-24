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
  setPokemons,
  catchedPokemon,
  setPage
}) {
  return (
    <div className="main">
      <Route
        exact
        path="/"
        render={params => (
          <PokemonList
            setPage={setPage}
            selectedPokemon={selectedPokemon}
            pokemons={pokemons}
            setSelectedPokemon={setSelectedPokemon}
            params={params}
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
            setPokemons={setPokemons}
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
