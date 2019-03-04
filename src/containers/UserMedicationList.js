import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Medication from '../components/Medication';


class UserMedicationList extends Component {

  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="stretch"
      >
        {this.props.currentMedications.map((med, i) => (
          <Medication med={med} key={i} />
        ))}
      </Grid>
    );
  }
}

export default UserMedicationList
