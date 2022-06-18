import { Container, Typography, Box, Grid, TextField } from "@mui/material";
import type { NextPage } from "next";
import { BaseLayout } from "../components/layout";
import { seedDataPoke } from "../database";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      {seedDataPoke.pokemon.map((pokemon, index) => (
        <Container key={index}>
          <Container className="container shop-local-container">
            <Container className="shop-local-wrapper">
              <Box className="shop-local-left"></Box>
              <Box className="shop-local-right">
                <Container className="shop-local-content-warpper">
                  <Typography variant="h2" className="shop-local-heading">
                    {pokemon.pname}
                  </Typography>
                  <Grid container>
                    <Typography variant="body1" sx={{ paddingLeft: "15px" }}>
                      {pokemon.rname.map((el) => (
                        <Grid item>{el}</Grid>
                      ))}
                    </Typography>

                    <Typography sx={{ paddingLeft: "15px" }}>
                      {pokemon.rtotal.map((el) => (
                        <Grid
                          item
                          component="form"
                          noValidate
                          autoComplete="off"
                        >
                          <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            size="small"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </Grid>
                      ))}
                    </Typography>

                    <Typography
                      variant="body1"
                      sx={{ paddingLeft: "15px", paddingTop: "7px" }}
                    >
                      {pokemon.rtotal.map((el) => (
                        <Grid item>{el}</Grid>
                      ))}
                    </Typography>
                  </Grid>
                </Container>
              </Box>
            </Container>
          </Container>
        </Container>
      ))}
    </BaseLayout>
  );
};

export default Home;
