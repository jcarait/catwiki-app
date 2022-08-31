import { screen, render } from "@testing-library/react";
import CatProfile from "../routes/CatProfile";

describe("Cat Profile Page", () => {
  describe("given a valid cat breed name", () => {
    it("should render name of cat requested from search", () => {
      const name = "Siamese";

      render(<CatProfile name={name} />);
      const nameElement = screen.getByText(name);
      expect(nameElement).toBeInTheDocument();
    });
  });
});
