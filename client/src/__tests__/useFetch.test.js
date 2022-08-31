import { render, screen, waitFor } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import useFetch from "../utils/useFetch";

const server = setupServer(
  rest.get("/breeds", async (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ name: "bengal" }, { name: "aegean" }])
    );
  })
);

beforeEach(() => jest.spyOn(global, "fetch"));
beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  jest.restoreAllMocks();
});
afterAll(() => server.close());

describe("useFetch hook", () => {
  it("should handle server error", async () => {
    server.use(
      //override initial GET to return 500 server error
      rest.get("/breeds", (req, res, ctx) => {
        return res(ctx.status(500));
      })
    );

    render(<TestComponent url="/breeds" />);
    const alert = await waitFor(() => screen.findByRole("alert"), 4000);
    expect(alert).toBeInTheDocument();
  });

  it("should return and render data on success", async () => {
    jest.spyOn(global, "fetch");

    act(() => render(<TestComponent url="/breeds" />));

    const data = await screen.findByTestId("bengal");
    expect(data).toBeInTheDocument();
  });

  function TestComponent({ url }) {
    const { data, error } = useFetch(url);

    return (
      <div>
        <ul data-testid="data">
          {data?.map((breed) => (
            <li key={breed.name} data-testid={breed.name}>
              {breed.name}
            </li>
          ))}
        </ul>
        {error && <p role="alert">{error}</p>}
      </div>
    );
  }
});
