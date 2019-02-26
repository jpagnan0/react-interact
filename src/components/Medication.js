import React, { Component } from "react";

export default class Medication extends Component {
  render() {
    console.log("Props in Medication Component:", this.props.medications);
    return (
      <ul>
        {this.props.medications === "undefined"
          ? "Loading"
          : this.props.medications.map((med, i) => (
              <li>
                <li key={i}>{med.rxcui}</li>
                <li key={i}>{med.name}</li>
                <li key={i}>{med.nam_alt}</li>
              </li>
            ))}
      </ul>
    );
  }
}
