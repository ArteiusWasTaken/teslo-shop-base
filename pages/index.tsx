import { Container, Typography, Box } from "@mui/material";
import type { NextPage } from "next";
import { BaseLayout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Container
        sx={{ display: "block", paddingTop: "65px", paddingBottom: "65px" }}
      >
        <Container
          sx={{
            display: "flex",
            direction: "horizontal",
            minHeight: "500px",
            alignContent: "strech",
            justifyContent: "end",
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "30",
              minHeight: "440",
              fit: "fill",
              position: "absolute",
              top: "6%",
              borderRadius: "5px",
              backgroundColor: "rgba(255, 255,21)",
            }}
          >
            sasdasdasd
          </Box>
          <Box
            sx={{
              display: "flex",
              width: "80",
              fit: "fill",
              position: "static",
              borderRadius: "5px",
              backgroundColor: "rgba(255, 123,123)",
              padding: "45px 45px 45px 45px",
            }}
          >
            ff
          </Box>
        </Container>
      </Container>
    </BaseLayout>
  );
};

export default Home;
