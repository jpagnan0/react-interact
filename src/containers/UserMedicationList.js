import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Medication from '../components/Medication';


class UserMedicationList extends Component {



  render() {
    const { medications } = this.props;
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
export default UserMedicationList
// export default connect(mapStateToProps)(UserMedicationList)
