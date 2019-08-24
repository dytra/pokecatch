import PokeApi from "../PokeApi";

describe("PokeApi", () => {
  test("getAllPokemon", async () => {
    const pokemons = await PokeApi.getAllPokemon();
    expect(pokemons.length).toBeGreaterThanOrEqual(20);
  });

  test("pokemonInfo", async () => {
    const pokemon = await PokeApi.getPokemonInfo("pikachu");
    expect(typeof pokemon).toBe("object");
  });
  test("catch pokemon", () => {
    expect(typeof PokeApi.catchPokemon()).toBe("boolean");
  });
});
