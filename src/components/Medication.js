import React from "react";
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom'
const styles = theme => ({
  card: {
    maxWidth: 400
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 6
  },
  cardSpacer: {
    marginRight: 3,
    marginBottom: 3,
  },
});


const Medication = props => {
  const { classes, theme } = props;
  console.log("theme:", theme)
  return (
    <div className={classes.cardSpacer}>
      <Card className={classes.card} square={true}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.med.rxcui}
          </Typography>
          <Typography variant="h5" component="h4">
            {props.med.name}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.med.name_alt}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="medium" onClick={() => props.handleClick(props.med)}>
            {props.name === "user-med-list" ? "Remove current meds" : "Add to current med"}
          </Button>
        </CardActions>
      </Card>
    </div>
      );
    };
      export default withStyles(styles)(Medication);
