import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "../components/Image";
import useFetch from "../utils/useFetch";

export default function CatProfile() {
  const { data, error } = useFetch("http://localhost:3001/api/images/siam");

  return (
    <Container>
      <Typography component={"div"} gutterBottom sx={{ color: "black" }}>
        <h1>Bengal</h1>
      </Typography>
      <Image images={data} error={error} />
    </Container>
  );
}
