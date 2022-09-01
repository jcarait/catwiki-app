import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import CatProfile from "../routes/CatProfile";

describe("Cat Profile Page", () => {
  describe("given a valid cat breed name", () => {
    it("should render name of cat requested from search", async () => {
      const mockUseLocationValue = {
        state: { name: "Siamese", id: "siam" },
      };

      render(
        <MemoryRouter initialEntries={[{ state: mockUseLocationValue }]}>
          <CatProfile />
        </MemoryRouter>
      );

      screen.getByTestId("test-title");
    });
  });
});
