import { screen, render } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

describe("CatWiki App", () => {
  describe("App", () => {
    it("should render catwiki title", () => {
      render(
        <BrowserRouter>
          <App />
        </BrowserRouter>
      );
      const titleElement = screen.getByText(/CatWiki/i);
      expect(titleElement).toBeInTheDocument();
    });
  });
});
