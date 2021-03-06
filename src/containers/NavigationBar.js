import React, { Component } from "react";
import {connect} from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { loggedIn } from '../actions/auth';
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  bigAvatar: {
    marginTop: 10,
    width: 80,
    height: 60,
  },
});

class NavigationBar extends Component {
  render() {
    const { classes, loggedInUser } = this.props;
    console.log(loggedIn())
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
              <Typography variant="h4" color="inherit" className={classes.grow}>
                <img alt="RX" src="rx-logo.svg" className={classes.bigAvatar} />
              </Typography>
              <Typography variant="h4" color="inherit" className={classes.grow}>
                {loggedInUser.token === localStorage.getItem('token') ?  `Welcome ${loggedInUser.name}` : ''}
              </Typography>
              {!loggedInUser.token &&
                <Button href="/signup" color="secondary" size="large" outlined="true" >
                  Sign Up
                </Button>}
              <Button href="/login" color="secondary" size="large" outlined="true" >
                {loggedInUser.token === localStorage.getItem('token') ? "Log Out" : "Login" }
              </Button>
            </Toolbar>
          </AppBar>
        </div>
      </CssBaseline>
    );
  }
}



function mapStateToProps(state) {
  return {
    loggedInUser: state.loggedInUser
  }
}
export default connect(mapStateToProps)(withStyles(styles)(NavigationBar));
