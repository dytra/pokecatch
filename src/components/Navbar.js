import React from "react";
import { Link } from "react-router-dom";
const Navbar = ({ setPage, catchedPokemon }) => {
  const handleClick = e => {
    console.log("setting page " + e.target.name);
    setPage(e.target.name);
  };
  return (
    <div className="navbar">
      <Link to="/">
        <button name="PokemonList" onClick={handleClick}>
          ListPokemon
        </button>
      </Link>

      <Link to="/my">
        <button name="MyPokemon" onClick={handleClick}>
          MyPokemon
        </button>
      </Link>
    </div>
  );
};

export default Navbar;
