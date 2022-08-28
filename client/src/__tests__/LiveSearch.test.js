import React from "react";
import { render, screen, act } from "@testing-library/react";
import LiveSearch from "../components/LiveSearch.js";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ breed: "bengal" }),
  })
);

describe("Live Search", () => {
  it("loads an array of cat breed names on mount", () => {});
});
