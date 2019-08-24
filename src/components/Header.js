import React from "react";

const Header = ({ selectedPokemon }) => {
  const headerTitle = selectedPokemon.name ? selectedPokemon.name : "Pokécatch";
  return (
    <header>
      <h1>{headerTitle}</h1>
    </header>
  );
};

export default Header;
