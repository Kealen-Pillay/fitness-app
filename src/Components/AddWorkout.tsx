import { Card } from "@mui/material";
import { createStyles, makeStyles } from "@mui/styles";

const useStyles = makeStyles(() =>
  createStyles({
    card: {
      backgroundColor: "1E1E1E",
      borderColor: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      height: 50,
    },
  })
);

export const AddWorkout = () => {
  const classes = useStyles();
  return <Card variant="outlined" className={classes.card} />;
};
