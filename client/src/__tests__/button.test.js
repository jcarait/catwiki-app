import { screen, render } from "@testing-library/react";

describe("Button component", () => {
  it("should render on the page", () => {
    render(<Button />);

    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
