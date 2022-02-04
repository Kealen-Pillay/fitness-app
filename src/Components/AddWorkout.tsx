import { Card, CardContent, Fab, TextField } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import AddIcon from '@mui/icons-material/Add';

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
  })
);

export const AddWorkout = () => {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root}>
        <CardContent>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            value="Add Workout"
          />
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </CardContent>
      </Card>
    </>
  );
};
