import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import Medication from '../components/Medication';

export default class MedicationList extends Component {
  constructor(props) {
    super(props);


  }
  render() {
    console.log("Props in medication List component", this.props);
    return (
      <ul>
        {
          this.props.medications.map((med, i) => (
            <li key={i}>
              <li>{med.rxcui}</li>
              <li>{med.name}</li>
              <li>{med.name_alt}</li>
          </li>
            ))
          }
      </ul>
    );
  }
}
