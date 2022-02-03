import {
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { AddWorkout } from "./AddWorkout";

const useStyles = makeStyles(() =>
  createStyles({
    content: {
      backgroundColor: "#1E1E1E",
      color: "#FFFFFF",
    },
    card: {
      width: 400,
      marginTop: "50px",
    },
  })
);

interface Props {
  day: string;
  url: string;
}

export const DayCard = ({ day, url }: Props) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.card} >
      <CardMedia component="img" height="140" image={url} />
      <CardContent className={classes.content}>
        <Typography gutterBottom variant="h5" component="div">
          {day}
        </Typography>
        <AddWorkout />
      </CardContent>
    </Card>
  );
};
