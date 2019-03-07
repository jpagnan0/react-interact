import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Button from "@material-ui/core/Button"
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Interaction from '../components/Interaction';
// import {userInteractions} from '../actions/userInteractions';

class InteractionList extends Component {
  removeUserInteraction = (med) => {

    console.log(med)
  }
  render() {
    const { classes, interactions } = this.props;
    return (
      <div>
        {interactions && interactions.map((interaction, i) => (
          <Interaction interaction={interaction} key={i} />
        ))}

      </div>
    );
  }
}
export default InteractionList;
