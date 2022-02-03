import { createStyles, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";
import { DashboardAppbar } from "./Components/DashboardAppbar";
import { DayCard } from "./Components/DayCard";

const useStyles = makeStyles(() => createStyles({}));

const workouts = [
  {
    name: "Push Day",
    url: "https://api.time.com/wp-content/uploads/2020/03/gym-coronavirus.jpg",
  },
  {
    name: "Pull Day",
    url: "https://content.presspage.com/uploads/2110/1920_gym-covid-19-mask-risk-gettyimages.jpg?10000",
  },
  {
    name: "Leg Day",
    url: "https://www.maximuscle.com/Images/Article/large/legs-workout.jpg",
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
      </Grid>
    </div>
  );
};
