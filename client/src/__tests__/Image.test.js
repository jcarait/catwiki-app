import { render, screen, waitFor } from "@testing-library/react";
import Image from "../components/Image";

describe("Image component", () => {
  test("Image must have src and alt attribute", async () => {
    render(<Image />);
    await waitFor(() => screen.findAllByRole("img"), { timeout: 4000 });

    expect(screen.getAllByRole("img")[0]).toHaveAttribute("src");
    expect(screen.getAllByRole("img")[0]).toHaveAttribute("alt");
  });
});
