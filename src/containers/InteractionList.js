import React, { Component } from "react";
import { connect } from "react-redux";
// import PropTypes from "prop-types";
import Button from "@material-ui/core/Button"
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import Interaction from '../components/Interaction';
import {userInteractions} from '../actions/userInteractions';

class InteractionList extends Component {
  removeUserInteraction = (med) => {

    console.log(med)
  }
  //
  // getUserInteractions= () => this.props.userInteractions(this.props.uid)
  // componentDidUpdate(prevProps) {
  //   if(this.props.userInteractions(this.props.uid) !== prevProps.userInteractions(this.props.uid)) {
  //     this.props.userInteractions(this.props.id)
  //   }
  // }
  //
  componentDidMount() {
    this.props.userInteractions(this.props.loggedInUser.id)
  }
  // getUserInteractions = () => {
  //   return this.props.userInteractions(this.props.loggedInUser.uid)
  // }

  //  renderInteractions = () => {
  //     this.props.interactions.map((interaction, i) => {
  //     return <Interaction interaction={interaction} key={i} />
  //   })
  // }
  //
  componentDidUpdate(prevProps, prevState) {
    console.log("if statement!", (this.props.interactions.length !== prevProps.interactions.length))
    if(this.props.interactions.length !== prevProps.interactions.length) {
      this.props.userInteractions(this.props.loggedInUser.id)
        console.log(this.props.interactions)
    }
  }

  render() {
    return (
      <div>
        {this.props.interactions.length > 0 && this.props.interactions.map((interaction, i) => {
          return <Interaction interaction={interaction} key={i} />
        })}
      </div>
    );
  }
}


export default connect(null,{userInteractions: userInteractions})(InteractionList);
