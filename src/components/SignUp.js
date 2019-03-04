import React, { Component } from "react";
import { connect } from "react-redux";
import {setCurrentUser, signup} from "../actions/auth";
// import { withAuth } from "react-authmanager";
import PropTypes from "prop-types";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing.unit
  },
  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

export class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: "",
        username: "",
        password: "",
        confirmPassword: ""
      },
      submitted: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { user } = this.state;
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    // const {name, username, password} = this.state;
    this.props.dispatch(signup(this.state.user))
    // console.log("setCurrentUser:", signin(this.state.user))

    console.log("user:" , this.state.user)
    // console.log("dispatch:" , dispatch)
  }

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} onSubmit={this.handleSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Full Name</InputLabel>
              <Input
                id="name"
                name="name"
                autoFocus
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">User Name</InputLabel>
              <Input
                id="username"
                name="username"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                onChange={this.handleChange}
              />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <Input
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                onChange={this.handleChange}
              />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign in
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
}
// Authmanager.config.getToken = async credentials => {
//   ... // login user with an ajax call to the server and get a token back
//   return token;
// }
//
// // how to get the current logged user informations from the server
// Authmanager.config.getUser = async () => {
//   ... // get current logged user informations from the server with an ajax call
//   return user;
// }
// export default withStyles(styles)(SignUp);
function mapStateToProps(state) {
  const { user } = state.auth;
  const { router } = state;
    return {
      user,
      router
    };
}
//
//
export default connect(mapStateToProps)(withStyles(styles)(SignUp))
