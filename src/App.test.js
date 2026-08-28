import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders portfolio site and home elements", () => {
  render(<App />);
  const headingElement = screen.getByText(/Aspiring IT/i);
  expect(headingElement).toBeInTheDocument();
});

