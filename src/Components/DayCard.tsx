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
    content: {
      backgroundColor: "#1E1E1E",
      color: "#FFFFFF",
    },
    card: {
      width: 400, 
    },
  })
);

export const DayCard = () => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card}>
      <CardMedia component="img" height="140" image={PushDayImage} />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="div">
          Push Day
        </Typography>
      </CardContent>
    </Card>
  );
};
