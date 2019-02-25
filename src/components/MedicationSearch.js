import React, { Component } from 'react';
import PropTypes from 'prop-types';

const API_SEARCH = `http://localhost:3000/api/v1/search?medication_name=`;

class MedicationSearch extends Component {

  static propTypes = {

  };

  constructor(props) {
    super(props);

    this.state = {
      medication_name: ''
    };
  }

  componentDidMount() {
    fetch(`${API_SEARCH}${this.state.medication_name}`)
    .then(res => res.json())
    .then(console.log)
  }
  render() {
    return (
      <div>MyComponent</div>
    );
  }

}

export default MedicationSearch;
