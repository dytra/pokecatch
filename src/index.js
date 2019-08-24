import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Header from "./components/Header";
import PokeApi from "./PokeApi";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  const [page, setPage] = useState("PokemonList");
  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState({
    name: "pikachu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
  });

  //initial load
  useEffect(() => {
    const fetchPokemon = async () => {
      const fetchedPokemon = await PokeApi.getAllPokemon();
      // console.log(fetchedPokemon);
      setPokemons(fetchedPokemon);
    };
    fetchPokemon();
  }, []);
  const [catchedPokemon, setCatchedPokemon] = useState([]);

  return (
    <div className="App">
      <Router>
        <Header
          selectedPokemon={selectedPokemon}
          catchedPokemon={catchedPokemon}
          pokemons={pokemons}
          page={page}
        />
        <Main
          currentPage={page}
          setPage={setPage}
          pokemons={pokemons}
          catchedPokemon={catchedPokemon}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
          setCatchedPokemon={setCatchedPokemon}
          setPokemons={setPokemons}
        />
        <Navbar setPage={setPage} catchedPokemon={catchedPokemon} />
      </Router>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
