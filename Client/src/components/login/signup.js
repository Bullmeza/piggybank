import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Redirect, Route } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(1.7),
    marginBottom: theme.spacing(1.7),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "25ch",
  },
}));

function Signup() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const cookie = document.cookie;
  var loggedIn = false;

  if (cookie.includes("session_id")) {
      loggedIn = true;
  }

  console.log(loggedIn)

  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confPassword, setConfPassword] = React.useState("");
  const [money, setMoney] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    if (password == confPassword && money >= 0) {
      setOpen(false);
      axios.post(`http://localhost:3001/signup`, {username: username, email: email, password: password, money: money}) //this link needs to be changed
        .then(res => {
          console.log(res);
          console.log(res.data);
          document.cookie = "session_id=" + res.data.session_id
        });
    } else {
      console.log("passwords don't match")
    }
  };

  return (
    <div>
      <Route exact path="/">
        {loggedIn ? <Redirect to="/dashboard" /> : this}
      </Route>
      <Button
        style={{ fontSize: "9pt", backgroundColor: "transparent" }}
        onClick={handleClickOpen}
      >
        Signup!
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Signup</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Username"
            type="email"
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Confirm Password"
            onChange={(e) => setConfPassword(e.target.value)}
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Starting money"
            onChange={(e) => setMoney(e.target.value)}
            type="email"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Signup;
