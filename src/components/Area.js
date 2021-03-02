import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Form from "./Form";
import { Typography } from "@material-ui/core";

export default function Area() {
  const unitData = [
    {
      value: "mm2",
      name: "mm2",
    },
    {
      value: "cm2",
      name: "cm2",
    },
    {
      value: "m2",
      name: "m2",
    },
    {
      value: "in2",
      name: "in2",
    },
    {
      value: "ft2",
      name: "ft2",
    },
    {
      value: "km2",
      name: "km2",
    },
    {
      value: "ha",
      name: "ha",
    },
    {
      value: "ac",
      name: "ac",
    },
    {
      value: "mi2",
      name: "mi2",
    },
  ];
  return (
    <Card>
      <CardContent>
        <Typography>Area</Typography>
        <Form title="Area" unitData={unitData} />
      </CardContent>
    </Card>
  );
}
