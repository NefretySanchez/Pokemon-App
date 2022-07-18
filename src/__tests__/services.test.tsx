import AppPokemon from "../pages/index";
import { render, screen } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

const data = {
  name: "Pokemon test",
  attack: 32,
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
  defense: 42,
  type: "Planta",
  hp: 34,
  idAuthor: 1,
};

const server = setupServer(
  rest.get("https://bp-pokemons.herokuapp.com/?idAuthor=1", (req, res, ctx) => {
    return res(
      ctx.json({
        id: 1,
        name: "Pokemon test",
        attack: 32,
        image:
          "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
        defense: 42,
        type: "Planta",
        hp: 34,
        idAuthor: 1,
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("loads and displays pokemons", async () => {
  render(<AppPokemon />);
  expect(screen.getByRole("table"))
});

/* jest.mock("axios", () => {
  return {
    post: jest.fn(),
    get: jest.fn(),
    delete: jest.fn(),
    put: jest.fn(),
  };
}); */

/* describe("services", () => {
  describe("Post pokemons", () => {
    it("Add pokemon", () => {
      const jsdomAlert = window.alert;
      window.alert = () => {};
      (
        axios.post as jest.MockedFunction<typeof axios.post>
      ).mockResolvedValueOnce({});
      const data = {
        name: "Prueba Pucachu",
        attack: 42,
        image: "url",
        defense: 43,
        type: "Fuego",
        hp: 43,
        idAuthor: 1,
      };
      AddPokemons(data);
      window.alert = jsdomAlert;
    });
  });
});

test("render list pokemons", async () => {
  render(<AppPokemon />);
  const items = await waitFor(() => screen.getAllByRole("table"));
  expect(items.length).toBe(1);
});
 */
