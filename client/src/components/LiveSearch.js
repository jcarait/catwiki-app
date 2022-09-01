import { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";
import { searchHandler } from "../utils/searchHandler";
import { Button, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#f9fbe7",
    },
  },
});

export default function LiveSearch({ data, error }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleAutoCompleteChange = (e, value) => {
    setInputValue(value);
  };

  const handleTextFieldChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Autocomplete
        id="live-search"
        data-testid="live-search"
        // Added condition to return empty array if false as it crashes if props are undefined or null
        options={data ? data.map((breed) => breed.name) : []}
        sx={{ width: 300, bgcolor: "white", borderRadius: "8px" }}
        onChange={handleAutoCompleteChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by breed"
            variant="filled"
            onKeyDown={(e) => searchHandler(data, navigate, e)}
            onChange={handleTextFieldChange}
          />
        )}
      />
      <Button
        sx={{ marginTop: "1em" }}
        variant="outlined"
        color="secondary"
        onClick={() => searchHandler(data, navigate, ...[], inputValue)}
        data-testid="button"
      >
        Search
      </Button>
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </ThemeProvider>
  );
}
