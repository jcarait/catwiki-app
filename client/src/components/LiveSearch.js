import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function LiveSearch({ data, error }) {
  return (
    <>
      <Autocomplete
        id="live-search"
        data-testid="live-search"
        options={data ? data?.map((breed) => breed.name) : []}
        sx={{ width: 300, bgcolor: "white", borderRadius: "8px" }}
        renderInput={(params) => (
          <TextField {...params} label="Search by breed" variant="filled" />
        )}
      />
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </>
  );
}
