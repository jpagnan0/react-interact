import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "@material-ui/core/Input";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";



class MedicationSearch extends Component {
  render() {
    const {value, onChange, onSubmit} = this.props
    return (
      <form onSubmit={e => onChange(e, value)}>
        <FormControl fullWidth>
          <Input
            onChange={e => onChange(e.target.value)}
            value={value} key={value}
          />
          <Button value={value} type="submit">Search</Button>
        </FormControl>
      </form>
    );
  }
}

export default MedicationSearch
