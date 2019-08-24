import PokeApi from "../PokeApi";

describe("PokeApi", () => {
  test("getAllPokemon", async () => {
    const pokemons = await PokeApi.getAllPokemon();
    expect(pokemons.length).toBeGreaterThanOrEqual(20);
  });

  test("pokemonInfo available", async () => {
    const pokemon = await PokeApi.getPokemonInfo("pikachu");
    expect(typeof pokemon).toBe("object");
  });

  test("pokemonInfo not available", async () => {
    const pokemon = await PokeApi.getPokemonInfo("xxx");
    expect(
      Object.keys(pokemon).length === 0 && pokemon.constructor === Object
    ).toBe(true);
  });
  test("catch pokemon", () => {
    expect(typeof PokeApi.catchPokemon()).toBe("boolean");
  });
});
