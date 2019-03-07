import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
const styles = theme => ({
  card: {
    maxWidth: 500,
    height: 250
  },
  title: {
    fontSize: 20
  },
  pos: {
    marginBottom: 6
  },
  cardSpacer: {
    marginBottom: 3
  }
});

const Interaction = props => {
  const { classes, theme, interaction} = props;
  const {name_one, name_two, medication_one_id, medication_two_id, description} = interaction;
  console.log("theme:", theme);
  const notNull = () => (!name_one && !name_two)
  return (
  <div className={classes.cardSpacer}>
    <Card className={classes.card} square={true} align="center">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          interaction
        </Typography>
        <Typography component="h3">{`${name_one} & ${name_two}`}</Typography>
        <Typography className={classes.pos} color="textSecondary">
          {interaction.description}
        </Typography>
      </CardContent>


    </Card>
  </div>
  );
};

export default withStyles(styles)(Interaction);
