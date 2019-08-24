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
  const [totalPokemon, setTotalPokemon] = useState(3);
  return (
    <div className="App">
      <Router>
        <Header />
        <Main
          currentPage={page}
          setPage={setPage}
          pokemons={pokemons}
          selectedPokemon={selectedPokemon}
          setSelectedPokemon={setSelectedPokemon}
        />
        <Navbar setPage={setPage} totalPokemon={totalPokemon} />
      </Router>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
