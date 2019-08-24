import React from "react";
import PokemonList from "./PokemonList";
import MyPokemon from "./MyPokemon";
import { Link } from "react-router-dom";
const Navbar = ({ setPage, catchedPokemon }) => {
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
      <button className="pokemon-logo">{catchedPokemon.length}</button>
      <Link to="/my">
        <button name="MyPokemon" onClick={handleClick}>
          MyPokemon
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
