import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { searchHandler } from "../utils/searchHandler";
import { Button } from "@mui/material";

export default function LiveSearch({ data, error }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <>
      <Autocomplete
        id="live-search"
        data-testid="live-search"
        // Added condition to return empty array if false as it crashes if props are undefined or null
        options={data ? data.map((breed) => breed.name) : []}
        sx={{ width: 300, bgcolor: "white", borderRadius: "8px" }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by breed"
            variant="filled"
            onKeyDown={(e) => searchHandler(data, navigate, e)}
            onChange={handleChange}
          />
        )}
      />
      <Button
        onClick={(e) => searchHandler(data, navigate, ...[], inputValue)}
        data-testid="button"
      />
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </>
  );
}
