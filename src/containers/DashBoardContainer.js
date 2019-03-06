import React, { Component } from "react";
import { connect } from "react-redux";
// import { Switch, Route } from 'react-router'
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import { medicationTerm, doFetchMedications } from "../actions/medication";
import { postUserMedication, getUserMedications } from "../actions/userMedications";
import MedicationSearch from "../components/MedicationSearch";
import MedicationList from "./MedicationList";
import UserMedicationList from "./UserMedicationList";

class DashBoardContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const {
      doFetchMedications,
      medicationTerm,
      medications,
      loggedInUser,
      currentMedications,
    } = this.props;
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate @prevProps:", prevProps);
    console.log("componentDidUpdate @this.props:", this.props);

    if (this.props.medicationTerm.search !== prevProps.medicationTerm.search) {
      let { dispatch, medicationTerm } = this.props;
      dispatch(medicationTerm(medicationTerm));
      dispatch(doFetchMedications(medicationTerm));
    }
    if (this.props.currentMedications !== prevProps.currentMedications) {
      let { dispatch, loggedInUser} = this.props
      dispatch(getUserMedications(loggedInUser.id))
    }

  }

  handleChange(nextMedication) {
    console.log("handleChange @nextMedication:", nextMedication);
    this.props.medicationTerm(nextMedication);
    this.props.doFetchMedications(nextMedication);
  }

  handleClick(e, med) {
    console.log(e.target)
    const {medications} = this.props;
    const {id} = this.props.loggedInUser;

    this.props.postUserMedication(med, id)
    this.props.getUserMedications(id)
  }


  render() {
    const { medicationTerm, medications, loggedInUser, getCurrentUser, getUserMedications, currentMedications} = this.props;
    // const { medications, interactions } = loggedInUser;
    const { interactions } = loggedInUser;

    // const { currentMedications } = this.state;
    const userMeds = loggedInUser.medications;

    return (
      <div>
        <CssBaseline>
          <MedicationSearch
            medicationTerm={this.medicationTerm}
            onChange={this.handleChange}
          />
        </CssBaseline>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="stretch"
          spacing={0}
        >
          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Typography variant="h5" color="inherit" align="center">
              Search Results
            </Typography>
            <Grid container>
              <MedicationList
                handleClick={this.handleClick}
                medications={this.props.medications}
              />
            </Grid>
          </Grid>

          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Typography variant="h5" color="inherit" align="center">
              Current Medications
            </Typography>
            <UserMedicationList
              currentMedications={userMeds}

            />
            {/* {currentMedications.length > 0 ? <Button onClick={() => (currentMedications)}>Check Interactions</Button>: ''} */}
          </Grid>

          <Grid item lg={4} md={4} sm={4} xs={12}>
            <Typography variant="h5" color="inherit" align="center">
              Interactions
            </Typography>
            {/* <UserMedicationList
                currentMedications={this.state.currentMedications}
            /> */}

          </Grid>
        </Grid>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("state in <DashBoardContainer /> @fn mapStateToProps():", state);
  return {
    loggedInUser: state.loggedInUser,
    currentMedications: state.loggedInUser.medications,
    medicationTerm: state.medicationTerm,
    medications: [...state.medicationsReducer.medications]
  };
}
export default connect(
  mapStateToProps,
  {
    doFetchMedications: doFetchMedications,
    medicationTerm: medicationTerm,
    postUserMedication: postUserMedication,
    getUserMedications: getUserMedications
  }
)(DashBoardContainer); // export default withRouter(DashBoardContainer);
