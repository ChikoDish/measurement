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
import converter from "../utils/converter";

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

  const handleChange1 = (event) => {
    setToUnit(event.target.value);
  };
  const submitForm = (e) => {
    e.preventDefault();
    setTo(converter(from, fromUnit, toUnit));
  };
  return (
    <form onSubmit={submitForm}>
      <TextField
        label="from"
        type="number"
        step="any"
        onChange={(e) => setFrom(e.target.value)}
      ></TextField>
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
            <MenuItem value={value}>{name}</MenuItem>
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
            <MenuItem value={value}>{name}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Calculate
      </Button>
    </form>
  );
};

export default Form;
