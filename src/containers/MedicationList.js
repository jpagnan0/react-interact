import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Medication from '../components/Medication';


class MedicationList extends Component {
  handleClick = (rxcui) => {
    console.log(rxcui)
  }
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
          <Medication handleClick={this.handleClick} med={med} key={i} />
        ))}
      </Grid>
    );
  }
}

export default MedicationList
