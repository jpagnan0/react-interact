import React, { Component } from "react";
import { connect } from "react-redux";
// import {setRxcui, addToUserMedications} from '../actions/userMedications';
import {dispatchRxcui, dispatchRxcuis} from '../actions/userMedications';
// import PropTypes from "prop-types";
import Grid from '@material-ui/core/Grid';
import Medication from '../components/Medication';


class MedicationList extends Component {
  componentDidUpdate() {

  }
  handleClick = (rxcui) => {
    this.props.dispatch({
      type: 'SET_RXCUI',
      rxcui: rxcui,
    })
  }
  render() {
    // console.log(this.state.rxcuis)
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
//
function mapStateToProps(state) {
  return {
    rxcui: state.rxcui,
    rxcuis: state.rxcuis
   }
}

export default connect(mapStateToProps)(MedicationList)
