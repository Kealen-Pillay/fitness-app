import {
  AppBar,
  Box,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

interface Props {}

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      height: 80,
    },
  })
);

export const DashboardAppbar = (props: Props) => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Grid direction="row" container justifyContent="center">
            <Grid item>
              <Typography variant="h4">
                Fitness Planner
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
