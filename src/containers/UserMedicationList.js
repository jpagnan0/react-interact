import React, { Component } from "react";


import Medication from '../components/Medication';

class UserMedicationList extends Component {
  removeUserMedication = (med) => {

    console.log(med)
  }
  render() {
    const { currentMedications } = this.props;

    return (
      <div>
        {currentMedications.length > 0 ? currentMedications.map((med, i) => (
          <Medication name="user-med-list" removeUserMedication={this.removeUserMedication} med={med} key={i} />
        )):''}

      </div>
    );
  }
}
export default UserMedicationList;
