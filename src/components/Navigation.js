import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Navigation(props) {
  console.log(props.currentUser)
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        { !props.currentUser ?
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              Interact
            </Typography>
            <Button color="inherit">
              <Link to="/signup" className="item">
                Sign Up
              </Link>
            </Button>
            <Button color="inherit">
              <Link to="/login" className="item">
                Log In
              </Link>
            </Button>
          </Toolbar>
        :
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {`Welcome, ${props.currentUser.name}!`}
          </Typography>
          <Button onClick={props.logout} color="inherit">
            <Link to="/" className="item">
              Log Out
            </Link>
          </Button>
        </Toolbar>
        }
      </AppBar>
    </div>
  );
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigation);
