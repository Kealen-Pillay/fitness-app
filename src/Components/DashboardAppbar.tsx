import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

interface Props {}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
      height: 80,
    },
  })
);

export const DashboardAppbar = (props: Props) => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container justifyContent="center">
            <Grid item>
              <Typography variant="h4" component="div">
                Fitness Dashboard
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
