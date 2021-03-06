const url = "https://pokeapi.co/api/v2/";
const pokemonURL = "https://pokeapi.co/api/v2/pokemon/";
const PokeApi = {
  getAllPokemon: async () => {
    //get all pokemon raw data
    const pokemons = await fetch(url + "pokemon/")
      .then(res => res.json())
      .then(json => {
        return json.results.map(async pokemon => {
          const p = await fetch(`${pokemonURL}${pokemon.name}`).then(data =>
            data.json()
          );
          return {
            id: p.id,
            name: p.name,
            image: p.sprites.front_default
          };
        });
      });
    //get images each pokemon

    return Promise.all(pokemons);
  },
  getPokemonInfo: async pokemonName => {
    let pokemonInfo = null;
    try {
      pokemonInfo = await fetch(pokemonURL + pokemonName).then(res =>
        res.json()
      );
    } catch (e) {
      pokemonInfo = {};
    }
    return pokemonInfo;
  },
  catchPokemon: () => {
    const chance = Math.random() > 0.5;
    return chance;
  },
  helloWorld: () => {
    return "Hello, World!";
  }
};

export default PokeApi;
