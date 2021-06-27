import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Popover from '@material-ui/core/Popover';


const useStyles = makeStyles({
  savingsContext: {
    flex: 1,
  },
  container: {
      display: 'flex'
  },
  img: {
      height: 120,
      width: 120,
      marginRight: 15
  },
  popover: {
    pointerEvents: 'none',
  },
  paper: {
    padding: 10
  },
});

const savings = 123.45;
const date = "June 27, 2021";

function Savings() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Badges</Title>
      <br />
      <div className={classes.container}>
        <MouseOverPopover name="New User" link="https://cdn.discordapp.com/attachments/855858620863873025/858573520740810812/circle-black-colored-02-star-400.png"/>
        <MouseOverPopover name="First Purchase" link="https://cdn.discordapp.com/attachments/855858620863873025/858573526416097310/circle-black-colored-07-gem-400.png"/>
        <MouseOverPopover name="First Week" link="https://cdn.discordapp.com/attachments/855858620863873025/858573525266595840/circle-black-colored-06-clock-400.png"/>
        <MouseOverPopover name="2 Week Saving Spree" link="https://cdn.discordapp.com/attachments/855858620863873025/858573567913099284/circle-black-colored-17-suitcase-400.png"/>
        <MouseOverPopover name="First Goal Reached" link="https://cdn.discordapp.com/attachments/855858620863873025/858573569905917952/circle-black-colored-18-bullseye-400.png"/>
        <MouseOverPopover name="$100 Goal" link="https://cdn.discordapp.com/attachments/855858620863873025/858573684855930910/circle-black-colored-08-crown-400.png"/>

      </div>
    </React.Fragment>
  );
}

 

export default Savings;






function MouseOverPopover (props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <img className={classes.img} src={props.link}/>
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'center',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'center',
            horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        {props.name}
      </Popover>
    </div>
  );
}
