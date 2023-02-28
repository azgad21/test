import { render, screen } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  render(<App />);
});

test("render Calcular Serie N title", () => {
  const title = screen.getByText(/calculando serie n/i);
  expect(title).toBeInTheDocument();
});

test("should renders the form elements", () => {
  const btnEl = screen.getByText(/calcular /i);
  expect(btnEl).toBeInTheDocument();
});

test("should renders button", () => {
  const btnEl = screen.getByRole("button", { name: /calcular/i });
  expect(btnEl).toBeInTheDocument();
});