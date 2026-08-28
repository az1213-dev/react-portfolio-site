import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

if (typeof window !== "undefined") {
  window.scrollTo = jest.fn();
}

jest.mock(
  "@vercel/analytics/react",
  () => ({
    Analytics: () => null,
  }),
  { virtual: true }
);

