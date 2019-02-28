import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Medication from '../components/Medication';


class MedicationList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        {this.props.medications.map((med, i) => (
          <Medication med={med} key={i} />
        ))}
      </Grid>
    );
  }
}

export default MedicationList
