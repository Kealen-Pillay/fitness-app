import { createStyles, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { DashboardAppbar } from "./Components/DashboardAppbar";
import { DayCard } from "./Components/DayCard";

const useStyles = makeStyles(() =>
  createStyles({
    gridLayout: {
      justifyContent: "space-between",
    },
  })
);

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <DashboardAppbar />
      <Grid container>
        <Grid item xs={4}>
          <DayCard />
        </Grid>
      </Grid>
    </div>
  );
};
