import { screen, render } from "@testing-library/react";
import App from "../App";

describe("CatWiki App", () => {
  describe("App", () => {
    it("should render catwiki title", () => {
      render(<App />);
      const titleElement = screen.getByText(/CatWiki/i);
      expect(titleElement).toBeInTheDocument();
    });
  });
});
