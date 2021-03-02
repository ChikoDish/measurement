import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Form from "./Form";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Length() {
  const classes = useStyles();
  const unitData = [
    {
      value: "mm",
      name: "mm",
    },
    {
      value: "cm",
      name: "cm",
    },
    {
      value: "m",
      name: "m",
    },
    {
      value: "in",
      name: "in",
    },
    {
      value: "ft",
      name: "ft",
    },
  ];
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography>Length</Typography>
        <Form title="Length" unitData={unitData} />
      </CardContent>
    </Card>
  );
}
