import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CatProfile from "../routes/CatProfile";

describe("Cat Profile Page", () => {
  describe("given a valid cat breed name", () => {
    it("should render name of cat requested from search", async () => {
      jest.mock("react-router-dom", () => ({
        ...jest.requireActual("react-router-dom"),
        useLocation: jest.fn().mockImplementation(() => {
          return { state: "Siamese" };
        }),
      }));

      render(
        <BrowserRouter>
          <CatProfile />
        </BrowserRouter>
      );
    });
  });
});
