/* eslint-disable testing-library/no-unnecessary-act */
import { rest } from "msw";
import { setupServer } from "msw/node";
import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import LiveSearch from "../components/LiveSearch";

const server = setupServer(
  rest.get("/breeds", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ name: "bengal" }, { name: "aegean" }])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

describe("LiveSearch component", () => {
  it("loads and autocompletes when user searches for cat breed", async () => {
    const user = userEvent.setup();

    render(<LiveSearch url="/breeds" />);

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
  it("should handle server error", async () => {
    server.use(
      //override initial GET to return 500 server error
      rest.get("/breeds", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );
    render(<LiveSearch url="/breeds" />);
    const alert = await waitFor(() => screen.findByText(/Oops/i), {
      timeout: 3000,
    });
    expect(alert).toBeInTheDocument();
  });
});
