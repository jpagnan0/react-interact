import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Button from "@material-ui/core/Button"
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Medication from '../components/Medication';
// import {userMedications} from '../actions/userMedications';

class UserMedicationList extends Component {
  removeUserMedication = (med) => {
    console.log(med)
  }
  render() {
    const { classes, currentMedications } = this.props;

    return (
      <div>
        {currentMedications && currentMedications.map((med, i) => (
          <Medication name="user-med-list" removeUserMedication={this.removeUserMedication} med={med} key={i} />
        ))}

      </div>
    );
  }
}
export default UserMedicationList;
