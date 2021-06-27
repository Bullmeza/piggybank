import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";

const StyledLinearProgress = withStyles({
  root: {
    width: "100%",
    height: 20,
    borderRadius: 9,
  },
  bar: {
    borderRadius: 9,
  },
})(LinearProgress);
const achievementsProgress = 56;

const useStyles = makeStyles({
  allowanceContext: {
    flex: 1,
  },
});

function ProgressBar() {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === achievementsProgress) {
          return achievementsProgress;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, achievementsProgress);
      });
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <StyledLinearProgress variant="determinate" value={progress} />
      <br />
      <br />
      <Typography color="textSecondary" className={classes.allowanceContext}>
        {"You have completed " +
          achievementsProgress +
          "% of the achievements!"}
      </Typography>
    </div>
  );
}

export default ProgressBar;
