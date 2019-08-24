import React, { useEffect } from "react";
import PokeApi from "../PokeApi";

const PokemonDetail = ({ selectedPokemon, setSelectedPokemon, params }) => {
  const pokemonName = params.match.params.pname;
  // console.log("pname iss", pokemonName);
  // console.log("selected pokemon iss", selectedPokemon);
  useEffect(
    e => {
      PokeApi.getPokemonInfo(pokemonName).then(pokemonInfo => {
        setSelectedPokemon({
          name: pokemonName,
          image: pokemonInfo.sprites.front_default,
          type: pokemonInfo.types,
          moves: pokemonInfo.moves
        });
      });
    },
    [setSelectedPokemon, pokemonName]
  );

  const pokemonTypeList = () => {
    let ret;
    if (selectedPokemon.type) {
      ret = selectedPokemon.type.map(type => {
        return <li key={type.type.name}>{type.type.name}</li>;
      });
    } else {
      ret = <span>loading</span>;
    }
    return ret;
  };

  const pokemonMoveList = () => {
    let ret;
    if (selectedPokemon.moves) {
      ret = selectedPokemon.moves.map(pokemon => {
        return <li key={pokemon.move.name}>{pokemon.move.name}</li>;
      });
    } else {
      ret = <span>loading</span>;
    }
    return ret;
  };

  const handleClick = () => {
    console.log("catching pokemon");
  };
  return (
    <div>
      <img src={selectedPokemon.image} alt={selectedPokemon.name} />
      <span>{selectedPokemon.name}</span>
      {pokemonTypeList()}
      {pokemonMoveList()}
      <button id="catch" onClick={handleClick}>
        Catch
      </button>
    </div>
  );
};

export default PokemonDetail;
