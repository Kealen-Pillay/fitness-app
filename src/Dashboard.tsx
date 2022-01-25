import { createStyles } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { DashboardAppbar } from "./Components/DashboardAppbar";
import { DayCard } from "./Components/DayCard";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#1E1E1E",
    },
  })
);

export const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <DashboardAppbar />
      <DayCard />
    </div>
  );
};
