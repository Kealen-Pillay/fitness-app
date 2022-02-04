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
      height: 80,
    },
  })
);

export const DashboardAppbar = (props: Props) => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" className={classes.appBar} sx={{backgroundColor: "#eb675e"}}>
        <Toolbar>
          <Grid direction="row" container justifyContent="center">
            <Grid item>
              <Typography variant="h4" sx={{marginTop: 2}}>
                Fitness Planner
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
