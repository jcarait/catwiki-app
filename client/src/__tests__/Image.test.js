import { render, screen } from "@testing-library/react";
import Image from "../components/Image";

describe("Image component", () => {
  test("Image must have src and alt attribute", () => {
    render(<Image />);
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute("src");
    expect(image).toHaveAttribute("alt");
  });
});
