import PokeApi from "../PokeApi";

describe("PokeApi", () => {
  test("catch pokemon", () => {
    expect(typeof PokeApi.catchPokemon()).toBe("boolean");
  });
});
