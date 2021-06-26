import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import axios from "axios";
import Signup from "./signup";
import "./login_popup.scss";

function LoginPopup() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log(email, password);
    setOpen(false);
    axios.post(`http://localhost:3001/login`, {email: email, password: password}) //this link needs to be changed
      .then(res => {
        console.log(res);
        console.log(res.data);
      });
  };

  return (
    <div>
      <div className="alert">
        <p></p>
      </div>
      <div className="center-button">
        <Button
          style={{
            maxWidth: "140px",
            maxHeight: "75px",
            minWidth: "140px",
            minHeight: "75px",
            fontSize: "16pt",
          }}
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          Login
        </Button>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
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
            type="email"
            onChange={(e) => setPassword(e.target.value)}
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
        <DialogContent>
          <div className="signup-text">
            Don't have an account?
            <Signup />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default LoginPopup;
