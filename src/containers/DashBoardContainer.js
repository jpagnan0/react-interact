import React, { Component } from "react";
import { connect } from "react-redux";
// import { Switch, Route } from 'react-router'
import Grid from '@material-ui/core/Grid';
import CssBaseline from "@material-ui/core/CssBaseline"
import {
  medicationTerm,
  doFetchMedications
} from "../actions/medication";
import MedicationSearch from "../components/MedicationSearch";
import MedicationList from "./MedicationList";
import UserMedicationList from "./UserMedicationList";

class DashBoardContainer extends Component {
  constructor(props) {

    super(props);
    this.state={
      currentMedications: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { doFetchMedications, medicationTerm, medications, loggedInUser} = this.props;
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


  handleClick(med) {
    this.setState({
      currentMedications: [...this.state.currentMedications, med]
    })
  }


  render() {
    const { medicationTerm, medications, loggedInUser } = this.props;
    return (
      <CssBaseline>
        <MedicationSearch
          medicationTerm={this.medicationTerm}
          onChange={this.handleChange}
        />

        <Grid
          container
          direction="row"
          justify="flex-start"
          alignItems="stretch"
          spacing={0}
        >
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <MedicationList handleClick={this.handleClick} medications={this.props.medications} />
          </Grid>

          <Grid item lg={4} md={4} sm={4} xs={12}>
            <UserMedicationList currentMedications={this.state.currentMedications} />
          </Grid>

        </Grid>
      </CssBaseline>
    );
  }
}
function mapStateToProps(state) {
  console.log("state in <DashBoardContainer /> @fn mapStateToProps():", state);

  return {
    loggedInUser: state.loggedInUser,
    medicationTerm: state.medicationTerm,
    medications: [...state.medicationsReducer.medications]
  };
}
export default connect(
  mapStateToProps,
  { doFetchMedications: doFetchMedications, medicationTerm: medicationTerm }
)(DashBoardContainer); // export default withRouter(DashBoardContainer);
