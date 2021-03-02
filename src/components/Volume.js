import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Form from "./Form";
import { Typography } from "@material-ui/core";

export default function Volume() {
  const unitData = [
    {
      value: "mm3",
      name: "mm3",
    },
    {
      value: "cm3",
      name: "cm3",
    },
    {
      value: "l",
      name: "l",
    },
    {
      value: "kl",
      name: "kl",
    },
    {
      value: "m3",
      name: "m3",
    },
    {
      value: "km3",
      name: "km3",
    },
    {
      value: "tsp",
      name: "tsp",
    },
    {
      value: "Tbs",
      name: "Tbs",
    },
    {
      value: "in3",
      name: "in3",
    },
    {
      value: "fl-oz",
      name: "fl-oz",
    },
    {
      value: "cup",
      name: "cup",
    },
    {
      value: "pnt",
      name: "pnt",
    },
    {
      value: "qt",
      name: "qt",
    },
    {
      value: "gal",
      name: "gal",
    },
    {
      value: "ft3",
      name: "ft3",
    },
    {
      value: "yd3",
      name: "yd3",
    },
  ];
  return (
    <Card>
      <CardContent>
        <Typography>Volume</Typography>
        <Form title="Volume" unitData={unitData} />
      </CardContent>
    </Card>
  );
}
