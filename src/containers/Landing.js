import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

class Landing extends Component {

  render() {
    return (
      <div style={{
        marginTop: "2em"
      }}>
        <Typography variant="h3" align="center" style={{
          marginTop: "2em",
          color: "#2196F3"
        }}>
          Interact
        </Typography>
        <Typography variant="h1" align="center" style={{
          marginTop: "40px"
        }}>
          The online tool for checking medications and interactions!
        </Typography>
        <div style={{
          width: "50%",
          margin: "0 auto",
          marginTop: "2em"
        }}>
          <Grid container spacing={0} align="center">
            <Grid item="item" xs={4}></Grid>
            <Grid item="item" xs={2}>
              <Button variant="raised" color="primary" style={{
                backgroundColor: "#2196F3"
              }}>
                Login
              </Button>
            </Grid>

            <Grid item="item" xs={2}>
              <Button variant="contained" color="primary" style={{
                backgroundColor: "#2196F3"
              }}>
                Signup
              </Button>
            </Grid>
            <Grid item="item" xs={4}></Grid>
          </Grid>
        </div>
      </div>
    );
  }
}
export default Landing;
