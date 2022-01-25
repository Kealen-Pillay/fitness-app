import {
  AppBar,
  Box,
  Button,
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
    },
  })
);

export const DashboardAppbar = (props: Props) => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
