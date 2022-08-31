import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useEffect, useState } from "react";

export default function LiveSearch({ url }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        setData(await response.json());
      } catch (error) {
        setError(error);
      }
    };

    fetchData();

    return () => {};
  }, [url]);

  return (
    <>
      <Autocomplete
        id="live-search"
        data-testid="live-search"
        options={data?.map((breed) => breed.name)}
        sx={{ width: 300, bgcolor: "white", borderRadius: "8px" }}
        renderInput={(params) => (
          <TextField {...params} label="Search by breed" variant="filled" />
        )}
      />
      {error && <p role="alert">Oops, failed to fetch!</p>}
    </>
  );
}
