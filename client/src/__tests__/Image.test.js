import { render, screen, waitFor } from "@testing-library/react";
import Image from "../components/Image";

describe("Image component", () => {
  test("Image must have src and alt attribute", async () => {
    const mockImage = [
      {
        url: "http://www.image.com",
        id: 1,
      },
    ];

    render(<Image images={mockImage} />);
    await waitFor(() => screen.findAllByRole("img"), { timeout: 4000 });

    expect(screen.getAllByRole("img")[0]).toHaveAttribute("src");
    expect(screen.getAllByRole("img")[0]).toHaveAttribute("alt");
  });
});
