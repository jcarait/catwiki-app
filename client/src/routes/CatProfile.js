import { Container } from "@mui/system";
import { Box, Button, Typography } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Image from "../components/Image";
import useFetch from "../utils/useFetch";

export default function CatProfile() {
  const location = useLocation();

  const { data, error } = useFetch(`/api/images/${location.state.id}`);

  return (
    <Container>
      <Typography component={"div"} gutterBottom sx={{ color: "black" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <h1 data-testid="test-title">{location.state.name}</h1>
          <Box sx={{ marginLeft: "auto" }}>
            <Link to="/">
              <Button variant="outlined">Search for another cat</Button>
            </Link>
          </Box>
        </Box>
      </Typography>
      <Image images={data} error={error} />
    </Container>
  );
}
