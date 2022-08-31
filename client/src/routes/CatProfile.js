import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Image from "../components/Image";

export default function CatProfile(props) {
  return (
    <Container>
      <Typography component={"div"} gutterBottom sx={{ color: "black" }}>
        <h1>Bengal</h1>
      </Typography>
      <Image />
    </Container>
  );
}
