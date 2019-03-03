import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import { connect } from 'react-redux';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignUpForm extends Component {
  state = {
    name: '',
    username: '',
    password: '',
    confirmPassword: ''
  }

  render() {
    // const { classes, handleChange, , username, password, confirmPassword } = this.props;
    const { classes, handleSubmit } = this.props;
    const { name, username, password, confirmPassword } = this.state;
    return (
      <main className={classes.main}>

        <Paper className={classes.paper}>

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <form className={classes.form} onSubmit={e => handleSubmit(e, name, username, password, confirmPassword) }>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="name">Full Name</InputLabel>
              <Input onChange={(e)=>this.setState({ name: e.target.value })} id="name" name="name" /*autoComplete="name"*/ autoFocus value={name}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">User Name</InputLabel>
              <Input onChange={(e)=>this.setState({ username: e.target.value })} id="username" name="username" /*autoComplete="username"*/ autoFocus value={username}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input onChange={(e)=>this.setState({ password: e.target.value })} name="password" type="password" id="password" /*autoComplete="current-password"*/ value={password}/>
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="confirmPassword">Confirm Password</InputLabel>
              <Input onChange={(e)=>this.setState({ confirmPassword: e.target.value })} name="confirmPassword" type="password" id="confirmPassword" /*autoComplete="current-password"*/ value={confirmPassword}/>
            </FormControl>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />

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

SignUpForm.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpForm);
//export default connect((state) => ({ name: state.name, username: state.username, password: state.password, confirmPassword: state.confirmPassword }))
