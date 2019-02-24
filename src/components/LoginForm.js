import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Lock from "@material-ui/icons/Lock";
import Create from "@material-ui/icons/Create";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  },
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm = () => {
    this.props.login(this.state.username, this.state.password)
  }

  render() {
    const { classes } = this.props;

    return (
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        <form onSubmit={this.submitForm}>
          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="username">User Name</InputLabel>
            <Input
              id="username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>

          <FormControl fullWidth className={classes.margin}>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              startAdornment={
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              }
            />
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Log In
          </Button>
        </form>
      </Grid>
    );
  }
}

export default withStyles(styles)(LoginForm);
