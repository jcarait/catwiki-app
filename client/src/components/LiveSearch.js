import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { searchHandler } from "../utils/searchHandler";

export default function LiveSearch({ data, error }) {
  const navigate = useNavigate();

  // const id = searchHandler();

  return (
    <>
      <Autocomplete
        id="live-search"
        data-testid="live-search"
        options={data ? data.map((breed) => breed.name) : []}
        sx={{ width: 300, bgcolor: "white", borderRadius: "8px" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by breed"
            variant="filled"
            onKeyDown={(e) => searchHandler(e, data, navigate)}
          />
        )}
      />
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </>
  );
}
