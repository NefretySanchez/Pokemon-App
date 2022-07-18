import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AppPokemon from "../pages/index";

test("renders learn react link", () => {
  const component = render(<AppPokemon />);
  component.getByText("Listado de Pokemon");
});

test("renders form create Pokemon", () => {
  render(<AppPokemon />);
  expect(screen.getByRole("button")).toHaveClass("btn-create");
  expect(screen.getByRole("table")).toHaveClass("table-bordered");
  expect(screen.getByRole("searchbox"));
  fireEvent.click(screen.getByRole("button"));
  waitFor(() =>
    screen.getByRole("form")
  );
});
