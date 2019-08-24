import React, { useEffect } from "react";
import PokeApi from "../PokeApi";

const PokemonDetail = ({
  selectedPokemon,
  setSelectedPokemon,
  setCatchedPokemon,
  catchedPokemon,
  setPage,
  params
}) => {
  const pokemonName = params.match.params.pname;
  // console.log("pname iss", pokemonName);
  // console.log("selected pokemon iss", selectedPokemon);
  useEffect(
    e => {
      setPage("PokemonDetail");
      PokeApi.getPokemonInfo(pokemonName).then(pokemonInfo => {
        setSelectedPokemon({
          name: pokemonName,
          image: pokemonInfo.sprites.front_default,
          type: pokemonInfo.types,
          moves: pokemonInfo.moves
        });
      });
    },
    [setSelectedPokemon, pokemonName, setPage]
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

  const handleClickCatchPokemon = () => {
    const chance = PokeApi.catchPokemon();
    if (chance) {
      console.log("Pokemon catched!");
      setCatchedPokemon([...catchedPokemon, selectedPokemon]);
    } else {
      console.log("Failed to catch pokemon :(");
    }
  };

  const disableCatchButton = () => {
    //disable button if already catched

    const found = catchedPokemon.filter(pokemon => {
      return pokemon.name === selectedPokemon.name;
    });
    const disable = found.length !== 0 ? "disabled" : "";
    return disable;
  };
  return (
    <div>
      <img src={selectedPokemon.image} alt={selectedPokemon.name} />
      <span>{selectedPokemon.name}</span>
      {pokemonTypeList()}
      {pokemonMoveList()}
      <button
        id="catch"
        onClick={handleClickCatchPokemon}
        disabled={disableCatchButton()}
      >
        Catch
      </button>
    </div>
  );
};

export default PokemonDetail;
