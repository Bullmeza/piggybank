import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  allowanceContext: {
    flex: 1,
  },
});

const interest = 1.23;
const date = "June 27, 2021";

function Interest(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Interest</Title>
      <br />
      <div>
        <Typography component="span" variant="h3">
          {"$" + props.interest.toFixed(2)}
        </Typography>
        <span>/month</span>
      </div>
      <br />
      <br />
      <Typography color="textSecondary" className={classes.allowanceContext}>
        {"Last change on " + date}
      </Typography>
    </React.Fragment>
  );
}

export default Interest;
