import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";

function Settings() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Add money
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="add-money"
            name="add-money"
            label="Amount ($)"
            fullWidth
            autoComplete="add-money"
            type="number"
          />
        </Grid>
      </Grid>
      <br />
      <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
        Save
      </Button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h6" gutterBottom>
        Set allowance
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="set-allowance"
            name="set-allowance"
            label="Amount ($)"
            fullWidth
            autoComplete="add-money"
            type="number"
          />
        </Grid>
      </Grid>
      <br />
      <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
        Save
      </Button>
    </React.Fragment>
  );
}

export default Settings;
