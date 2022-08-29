import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function ComboBox() {
  return (
    <Autocomplete
      id="live-search"
      data-testid="live-search"
      options={someCatInfo.map((breed) => breed.name)}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField {...params} label="Search for cat by breed name" />
      )}
    />
  );
}

const someCatInfo = [
  { id: "abys", name: "Abyssinian" },
  { id: "aege", name: "Aegean" },
];
