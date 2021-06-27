import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";

const useStyles = makeStyles({
  allowanceContext: {
    flex: 1,
  },
});

const allowance = 12.34;
const date = "June 27, 2021";

function Allowance(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Allowance</Title>
      <br />
      <div>
        <Typography component="span" variant="h3">
          {"$" + props.allowance.toFixed(2)}
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

export default Allowance;
