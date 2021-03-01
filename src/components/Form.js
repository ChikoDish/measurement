import {
  Button,
  FormControl,
  InputLabel,
  makeStyles,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React, { useState } from "react";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 180,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const Form = (props) => {
  const classes = useStyles();
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");

  const handleChange = (event) => {
    setFromUnit(event.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitForm}>
      <TextField
        label="from"
        type="number"
        onChange={(e) => setFrom(e.target.value)}
      ></TextField>
      <TextField label="to" disabled>
        {to}
      </TextField>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={fromUnit}
          onChange={handleChange}
        >
          {/* {props.unitData.map((unit) => {
            <MenuItem value={unit}>{unit}</MenuItem>;
          })} */}
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Select</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={toUnit}
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" color="primary">
        Calculate
      </Button>
    </form>
  );
};

export default Form;
