import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Medication from '../components/Medication';
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  root: {
    flexGrow: 1,
  },

})
class MedicationList extends Component {

  // handleClick = (med) => {
  //   console.log(userMedications(med))
  // }
  render() {
    const { medications, handleClick } = this.props;
    return (
      <div>
        {medications.map((med, i) => (
          <Medication handleClick={handleClick} med={med} key={i} />
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(MedicationList)
