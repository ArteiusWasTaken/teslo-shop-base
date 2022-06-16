import { Typography } from "@mui/material";
import type { NextPage } from "next";
import { BaseLayout } from "../components/layout";

const Home: NextPage = () => {
  return (
    <BaseLayout>
      <Typography variant="h1" component="h1">
        X
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        y{" "}
      </Typography>
    </BaseLayout>
  );
};

export default Home;
