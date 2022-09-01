import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import Image from "../components/Image";
import useFetch from "../utils/useFetch";

export default function CatProfile() {
  const location = useLocation();

  const { data, error } = useFetch(`/api/images/${location.state.id}`);

  return (
    <Container>
      <Typography component={"div"} gutterBottom sx={{ color: "black" }}>
        <h1 data-testid="test-title">{location.state.name}</h1>
      </Typography>
      <Image images={data} error={error} />
    </Container>
  );
}
