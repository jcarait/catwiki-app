/* eslint-disable testing-library/no-unnecessary-act */

import { render, screen, act, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import LiveSearch from "../components/LiveSearch";

describe("LiveSearch component", () => {
  describe("given data is called from api", () => {
    it("loads and autocompletes when user searches for cat breed", async () => {
      const mockData = [
        {
          name: "bengal",
        },
      ];
      const mockError = "";
      const user = userEvent.setup();

      render(<LiveSearch data={mockData} error={mockError} />);

      const liveSearch = screen.getByTestId("live-search");
      const input = screen.getByRole("combobox");

      act(() => {
        user.click(liveSearch);

        user.keyboard("beng");
      });

      await waitFor(() => screen.findByRole("option"), { timeout: 4000 });
      await user.click(screen.getAllByRole("option")[0]);

      expect(input.value).toEqual("bengal");
    });
  });
  describe("given the api call returns an error", () => {
    it("loads and autocompletes when user searches for cat breed", async () => {
      const mockData = null;
      const mockError = "404";

      render(<LiveSearch data={mockData} error={mockError} />);

      const alert = await screen.findByRole("alert");
      expect(alert).toBeInTheDocument();
    });
  });
});
