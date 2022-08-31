import { screen, render } from "@testing-library/react";
import CatProfile from "../routes/CatProfile";

describe("Cat Profile Page", () => {
  describe("given a valid cat breed name", () => {
    it("should render name of cat requested from search", () => {
      const name = { name: "Siamese" };

      render(<CatProfile props={name} />);
      const nameElement = screen.getByText(name.name);
      expect(nameElement).toBeInTheDocument();
    });
  });
});
