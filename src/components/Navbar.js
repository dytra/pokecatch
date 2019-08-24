import React from "react";
import PokemonList from "./PokemonList";
import MyPokemon from "./MyPokemon";
import { Link } from "react-router-dom";
const Navbar = ({ setPage, totalPokemon }) => {
  const handleClick = e => {
    setPage(e.target.name);
  };
  return (
    <div className="navbar">
      <Link to="/">
        <button name="PokemonList" onClick={handleClick}>
          ListPokemon
        </button>
      </Link>
      <button className="pokemon-logo">{totalPokemon}</button>
      <button name="MyPokemon" onClick={handleClick}>
        MyPokemon
      </button>
    </div>
  );
};

export default Navbar;
