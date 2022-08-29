import { fireEvent, render, screen, act, within } from "@testing-library/react";
import React from "react";
import ComboBox from "../components/LiveSearch";

test("that autocomplete works", async () => {
  render(<ComboBox />, {});

  const liveSearch = screen.getByTestId("live-search");
  const input = screen.getByRole("combobox");

  act(() => {
    liveSearch.click();
    liveSearch.focus();

    fireEvent.change(input, { target: { value: "aeg" } });
  });

  await act(async () => {
    await new Promise((resolve) => setTimeout(resolve, 0));
  });

  fireEvent.click(screen.getAllByRole("option")[0]);

  expect(input.value).toEqual("Aegean");
});
