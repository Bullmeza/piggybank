import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  savingsContext: {
    flex: 1,
  },
});

const savings = 123.45;
const date = "June 27, 2021";

function Savings(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Your Savings</Title>
      <br />
      <Typography component="p" variant="h3">
        {"$" + props.pesos.toFixed(2)}
      </Typography>
      <br />
      <br />
      <Typography color="textSecondary" className={classes.savingsContext}>
        {"Last change on " + date}
      </Typography>
    </React.Fragment>
  );
}

export default Savings;
