/* eslint-disable testing-library/no-unnecessary-act */

import { render, screen, act, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import LiveSearch from "../components/LiveSearch";

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

const mockData = [
  {
    id: 1,
    name: "bengal",
  },
];

describe("LiveSearch component", () => {
  describe("given data is called from api", () => {
    it("loads and autocompletes when user searches for cat breed", async () => {
      const mockError = "";
      const user = userEvent.setup();

      render(
        <BrowserRouter>
          <LiveSearch data={mockData} error={mockError} />
        </BrowserRouter>
      );

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

      render(
        <BrowserRouter>
          <LiveSearch data={mockData} error={mockError} />
        </BrowserRouter>
      );

      const alert = await screen.findByRole("alert");
      expect(alert).toBeInTheDocument();
    });
  });
  describe("a valid value is typed or selected from options and the enter key is pressed", () => {
    it("checks if input value is valid and calls useNavigate function", async () => {
      const user = userEvent.setup();

      render(
        <BrowserRouter>
          <LiveSearch data={mockData} />
        </BrowserRouter>
      );

      const liveSearch = screen.getByTestId("live-search");
      const input = screen.getByRole("combobox");

      await act(async () => {
        liveSearch.focus();
        user.click(liveSearch);
        await user.type(liveSearch, "bengal{Enter}");
      });

      expect(input.value).toEqual("bengal");
      expect(mockUseNavigate).toBeCalled();
    });
  });
  describe("an invalid value is typed or selected from options and the enter key is pressed", () => {
    it("should do nothing if enter is pressed", async () => {
      const user = userEvent.setup();

      render(
        <BrowserRouter>
          <LiveSearch data={mockData} />
        </BrowserRouter>
      );

      const liveSearch = screen.getByTestId("live-search");
      const input = screen.getByRole("combobox");

      await act(async () => {
        liveSearch.focus();
        user.click(liveSearch);
        await user.type(liveSearch, "beng{Enter}");
      });

      expect(input.value).toEqual("beng");
    });
  });
  describe("a button that can be clicked to search", () => {
    it("should render on the page", () => {
      render(<LiveSearch />);
      expect(screen.getByTestId("button")).toBeInTheDocument();
    });
    describe("when the button is clicked", () => {
      it("should execute the search function and call the navigate function", async () => {
        const user = userEvent.setup();

        render(
          <BrowserRouter>
            <LiveSearch data={mockData} />
          </BrowserRouter>
        );

        const button = screen.getByTestId("button");
        const liveSearch = screen.getByTestId("live-search");

        await act(async () => {
          liveSearch.focus();
          user.click(liveSearch);
          await user.type(liveSearch, "bengal");
          await user.click(button);
        });

        expect(mockUseNavigate).toBeCalled();
      });
    });
  });
});
