import { createStyles, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { DashboardAppbar } from "./Components/DashboardAppbar";
import { DayCard } from "./Components/DayCard";

const useStyles = makeStyles(() => createStyles({}));

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <DashboardAppbar />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <DayCard />
        </Grid>
        <Grid item>
          <DayCard />
        </Grid>
        <Grid item>
          <DayCard />
        </Grid>
      </Grid>
    </div>
  );
};
