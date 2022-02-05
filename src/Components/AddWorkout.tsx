import { Card, CardContent, Fab, Grid, TextField } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

const useStyles = makeStyles(() =>
  createStyles({
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
    }
  })
);

export const AddWorkout = () => {
  const classes = useStyles();

  return (
    <>
      {/* <Card className={classes.root}>
        <CardContent>
          <Grid container direction="row" justifyContent="space-between">
            <Grid item>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              value="Add Workout"
              className={classes.workoutField}
              sx={{marginRight: 1}}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              value="Reps"
              className={classes.repField}
              sx={{marginRight: 1}}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              value="Sets"
              className={classes.repField}
              sx={{marginRight: 1}}
            />
            </Grid>
            <Grid item>
            <Fab color="primary" size="small" aria-label="add" >
              <AddIcon />
            </Fab>
            </Grid>
          </Grid>
        </CardContent>
      </Card> */}
    </>
  );
};
