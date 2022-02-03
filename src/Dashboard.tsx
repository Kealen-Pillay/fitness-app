import { createStyles, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { DashboardAppbar } from "./Components/DashboardAppbar";
import { DayCard } from "./Components/DayCard";

const useStyles = makeStyles(() => createStyles({}));

const workouts = [
  {
    name: "Push Day",
    url: "url",
  },
  {
    name: "Pull Day",
    url: "url",
  },
  {
    name: "Leg Day",
    url: "url",
  },
];

export const Dashboard = () => {
  const classes = useStyles();

  return (
    <div>
      <DashboardAppbar />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        height="100vh"
      >
        {workouts.map((workout) => {
          return (
            <Grid item>
              <DayCard day={workout.name} url={workout.url} />
            </Grid>
          );
        })}
        {/* <Grid item>
          <DayCard />
        </Grid>
        <Grid item>
          <DayCard />
        </Grid>
        <Grid item>
          <DayCard />
        </Grid> */}
      </Grid>
    </div>
  );
};
