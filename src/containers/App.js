import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import SignUp from '../components/SignUp';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class AppContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <SignUp />
        </Grid>
      </div>
    );
  }
}

AppContainer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppContainer);
