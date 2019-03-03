import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from 'react-router'
import CssBaseline from "@material-ui/core/CssBaseline"
import MedicationSearch from '../components/MedicationSearch';
import MedicationList from './MedicationList';
import {
  medicationTerm,
  doFetchMedications
} from "../actions/medication";

class DashBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const { doFetchMedications, medicationTerm, medications } = this.props;
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate @prevProps:", prevProps);
    console.log("componentDidUpdate @this.props:", this.props);
    if (this.props.medicationTerm.search !== prevProps.medicationTerm.search) {
      const { dispatch, medicationTerm } = this.props;
      dispatch(medicationTerm(medicationTerm));
      dispatch(doFetchMedications(medicationTerm));
    }
  }

  handleChange(nextMedication) {
    console.log('handleChange @nextMedication:', nextMedication )
    this.props.medicationTerm(nextMedication);
    this.props.doFetchMedications(nextMedication);
  }

  render() {
    const { medicationTerm, medications } = this.props;
    return (
      <CssBaseline>
        <MedicationSearch
          medicationTerm={this.medicationTerm}
          onChange={this.handleChange}
        />
        <MedicationList medications={this.props.medications} />
      </CssBaseline>
    );
  }
}
function mapStateToProps(state) {
  console.log("state in <DashBoardContainer /> @fn mapStateToProps():", state);
  return {
    medicationTerm: state.medicationTerm,
    medications: [...state.medicationsReducer.medications]
  };
}
export default connect(
  mapStateToProps,
  { doFetchMedications: doFetchMedications, medicationTerm: medicationTerm }
)(DashBoardContainer); // export default withRouter(DashBoardContainer);
