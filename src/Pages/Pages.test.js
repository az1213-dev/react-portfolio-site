import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsOfService from "./TermsOfService";
import NotFound from "./NotFound";

test("renders Privacy Policy page in first person", () => {
  render(
    <MemoryRouter>
      <PrivacyPolicy />
    </MemoryRouter>
  );
  expect(screen.getByRole("heading", { name: /Privacy Policy/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /2\. Information I Collect/i })).toBeInTheDocument();
});

test("renders Terms of Service page", () => {
  render(
    <MemoryRouter>
      <TermsOfService />
    </MemoryRouter>
  );
  expect(screen.getByRole("heading", { name: /Terms of Service/i })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /3\. Acceptable Use Policy/i })).toBeInTheDocument();
});

test("renders 404 NotFound page in first person", () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
  expect(screen.getByRole("heading", { name: /Page Not Found/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Back to My Homepage/i })).toBeInTheDocument();
});
