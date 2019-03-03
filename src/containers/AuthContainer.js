import React, { Component } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
// import { setToken, setCurrentUser, signUp } from '../actions/auth';
import SignUpForm from '../components/SignUpForm';
import LoginForm from '../components/LoginForm';

class AuthContainer extends Component {


  constructor(props) {
    super(props);

    this.state = {
      token: '',
      loggedIn: false,
      loggedOut: false,
      currentUser: {},
      error: ''
    };
  }
  componentDidMount() {
    localStorage.setItem('token', this.state.token)
  }

  handleSubmit = (e, name, username, password, confirmPassword) => {
    e.preventDefault();
    let checkPw = password === confirmPassword ? 'success':false
    // signUp()
    if(checkPw) {
      fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          user: {
            name,
            username,
            password,
          }
        })
      })
      .then(r => r.json())
      .then(({jwt, user}) => {
        // this.setState({
        //   token: jwt,
        //   currentUser: user,
        // })
        this.props.dispatch({ type: "LOGIN", token: this.state.token, user: this.state.currentUser})
        console.log("token:", this.state.token)
        console.log("currentUser:", this.state.currentUser)
      })
    }
    //
    // console.log(checkPw)
    // console.log("username:", username)
    // console.log("password:",password)
    // console.log("confirmPassword:", confirmPassword)

  }



  render() {
    // const {username, password, confirmPassword} = this.state
    return (
      <CssBaseline>
        {/* { this.props.loggedIn } */}
        <SignUpForm handleSubmit={this.handleSubmit} />
        {/* <LoginForm user={this.state}/> */}.
      </CssBaseline>
    );
  }

}

function mapStateToProps(state) {
  return {
    token: state.token,
    user: state.currentUser,
  }
}

function mapDispatchToProps(dispatch, action) {
  return dispatch=>dispatch({type: "LOGIN", token: action.token, user: action.user })
}

export default connect(null, mapDispatchToProps)(AuthContainer);
