import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  logout,
  signup,
  authenticate,
  getUser
} from '../actions/userAuth';
import SignUpForm from '../components/SignUpForm';
const baseURL = 'http://localhost:3000/api/v1/'
class SignUpFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    }
  }
  componentDidMount() {
    const { username, password, passwordConfirmation } = this.state
    let token = localStorage.getItem("token")
    if(token) {
      fetch(`${baseURL}/current_user`)
      .then(res => res.json())
      .then()
    }
  }
  render() {
    return (
      <SignUpForm username={props.}/>
    );
  }

}

export default connect()(SignUpFormContainer);
