import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class NavigationBar extends Component {
  render() {
    const { classes } = this.props;
    // const { theme } = this.props;
    return (
      <CssBaseline>
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Interact
              </Typography>
              <Button href="/signin" color="secondary">
                {/* <Link to="/signup" /> */}
                  Sign Up
              </Button>
              <Button href="/login" color="secondary">
                {/* <Link to="/login"> Log In </Link> */}
                Log in
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </CssBaseline>
    );
  }
}

export default withStyles(styles)(NavigationBar);
