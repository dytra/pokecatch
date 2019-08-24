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
          type: pokemonInfo.types
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

  const handleClick = () => {
    console.log("catching pokemon");
  };
  return (
    <div>
      <img src={selectedPokemon.image} alt={selectedPokemon.name} />
      <span>{selectedPokemon.name}</span>
      {pokemonTypeList()}
      <button id="catch" onClick={handleClick}>
        Catch
      </button>
    </div>
  );
};

export default PokemonDetail;
