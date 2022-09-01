import { Container, createTheme, Grid, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import LiveSearch from "../components/LiveSearch";
import cat from "../images/cat.jpg";
import useFetch from "../utils/useFetch";

const BASE_URL = "http://localhost:3001";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "1rem",
    },
    h2: {
      fontSize: "12px",
    },
  },
});

export default function Home() {
  const { data, error } = useFetch(`/api/breeds`);

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{}}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center ",
            bgcolor: "black",
            borderRadius: "25px",
            margin: "auto",
            marginTop: "0.5rem",
            height: "650px",
            width: "100%",
          }}
        >
          <Grid
            item
            xs={12}
            sm={6}
            md={6}
            sx={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",

                flexDirection: "column",
                justifyContent: "center",
                padding: "1rem",
                borderRadius: "5px",
              }}
            >
              <Typography
                component={"div"}
                gutterBottom
                sx={{ color: "white" }}
              >
                <h1>CatWiki</h1>
                <p>Get to know more about your cat breed</p>
              </Typography>
              <LiveSearch data={data} error={error} />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6} sx={{ display: "flex" }}>
            <Box
              component="img"
              sx={{
                width: { xs: 200, sm: 250, md: 350 },
              }}
              alt="cat"
              src={cat}
            />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}
