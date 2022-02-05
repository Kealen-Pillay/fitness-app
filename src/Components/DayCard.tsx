import {
  Card,
  CardContent,
  CardMedia,
  Fab,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";

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
    root: {
      backgroundColor: "#1E1E1E",
      height: 70,
    },
    textfield: {
      marginTop: 10,
      marginLeft: 10,
    },
    workoutField: {
      width: 130,
    },
    repField: {
      width: 70,
    },
    setField: {
      width: 90,
    },
  })
);

interface Props {
  day: string;
  url: string;
}

export const DayCard = ({ day, url }: Props) => {
  const classes = useStyles();

  const [workout, setWorkout] = useState("Add Workout");
  const [reps, setReps] = useState("Reps");
  const [sets, setSets] = useState("Sets");
  const [items, setItems] = useState([]);

  const handleSubmit = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    console.log("hello World");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card
        variant="outlined"
        className={classes.card}
        sx={{
          borderColor: "white",
          borderWidth: 2,
        }}
      >
        <CardMedia component="img" height="140" image={url} />
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h5" component="div">
            {day}
          </Typography>
          <Card className={classes.root}>
            <CardContent>
              <Grid container direction="row" justifyContent="space-between">
                <Grid item>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    value={workout}
                    className={classes.workoutField}
                    sx={{ marginRight: 1 }}
                    onChange={(e) => setWorkout(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    value={reps}
                    className={classes.repField}
                    sx={{ marginRight: 1 }}
                    onChange={(e) => setReps(e.target.value)}
                  />
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    size="small"
                    value={sets}
                    className={classes.repField}
                    sx={{ marginRight: 1 }}
                    onChange={(e) => setSets(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Fab
                    color="primary"
                    size="small"
                    aria-label="add"
                    type="submit"
                  >
                    <AddIcon />
                  </Fab>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </form>
  );
};
