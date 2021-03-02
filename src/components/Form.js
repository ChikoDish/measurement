import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import Snackbar from "@material-ui/core/Snackbar";
import React, { useState } from "react";
import converter from "../utils/converter";

// function Alert(props) {
//   return <MuiAlert elevation={6} variant="filled" {...props} />;
// }

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    width: 500,
  },
}));

const Form = (props) => {
  const classes = useStyles();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [isValid, setIsValid] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleChange = (event) => {
    setFromUnit(event.target.value);
  };

  const addFrom = (e) => {
    if (isNaN(e.target.value)) {
      setIsValid(false);
      setOpen(true);
    } else {
      setIsValid(true);
      setFrom(e.target.value);
    }
  };

  const handleChange1 = (event) => {
    setToUnit(event.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!isValid) {
      setOpen(true);
    } else setTo(converter(from, fromUnit, toUnit));
  };
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: "3  00px" }}
    >
      <Card className={classes.root}>
        <CardContent>
          <form onSubmit={submitForm}>
            <TextField label="from" type="text" onChange={addFrom}></TextField>
            <TextField label="to" value={to} disabled></TextField>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={fromUnit}
                onChange={handleChange}
              >
                {props.unitData.map(({ value, name }, index) => (
                  <MenuItem key={index} value={value}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label1">Select</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={toUnit}
                onChange={handleChange1}
              >
                {props.unitData.map(({ value, name }, index) => (
                  <MenuItem key={index} value={value}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button type="submit" variant="contained" color="primary">
              Calculate
            </Button>
            <Snackbar
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              open={open}
              autoHideDuration={6000}
              onClose={handleClose}
              severity="success"
              message="Please Enter valid details!"
            />
          </form>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Form;
