import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import React from "react";
import PushDayImage from "../images/push-day.jpeg";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#1E1E1E",
      color: "#FFFFFF",
    },
  })
);

export const DayCard = () => {
  const classes = useStyles();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="140" image={PushDayImage} />
      <CardContent className={classes.root}>
        <Typography gutterBottom variant="h5" component="div">
          Push Day
        </Typography>
      </CardContent>
    </Card>
  );
};
