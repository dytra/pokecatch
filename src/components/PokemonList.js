import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const PokemonList = ({ pokemons, setPage, setSelectedPokemon }) => {
  useEffect(() => {
    setSelectedPokemon({});
    setPage("PokemonList");
  }, [setSelectedPokemon, setPage]);

  return (
    <ul>
      {pokemons.map(pokemon => {
        return (
          <Link
            key={pokemon.name}
            to={`/detail/${pokemon.name}`}
            className="pokemon"
          >
            <li
              className="pokemon"
              data-pokemon-name={pokemon.name}
              data-pokemon-id={pokemon.id}
              data-image={pokemon.image}
            >
              <img src={pokemon.image} alt={pokemon.name} />
              <span>{pokemon.name}</span>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default PokemonList;
