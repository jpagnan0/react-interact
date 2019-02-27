import React, { Component } from "react";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import Medication from '../components/Medication';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 6,
  },
};

class MedicationList extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        {this.props.medications.map((med, i) => (
          <Card key={i} >
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>{med.rxcui}</Typography>
              <Typography variant="h5" component="h4">{med.name}</Typography>
              <Typography className={classes.pos} color="textSecondary">{med.name_alt}</Typography>
            </CardContent>

            <CardActions>
              <Button size="medium">Add to current meds</Button>
            </CardActions>
          </Card>
        ))}
      </div>
    );
  }
}

export default withStyles(styles)(MedicationList)
