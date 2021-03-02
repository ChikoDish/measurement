import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Form from "./Form";
import { Typography } from "@material-ui/core";

export default function Time() {
  const unitData = [
    {
      value: "ns",
      name: "ns",
    },
    {
      value: "mu",
      name: "mu",
    },
    {
      value: "ms",
      name: "ms",
    },
    {
      value: "s",
      name: "s",
    },
    {
      value: "min",
      name: "min",
    },
    {
      value: "h",
      name: "h",
    },
    {
      value: "d",
      name: "d",
    },
    {
      value: "week",
      name: "week",
    },
    {
      value: "month",
      name: "month",
    },
    {
      value: "year",
      name: "year",
    },
  ];
  return (
    <Card>
      <CardContent>
        <Typography>Time</Typography>
        <Form title="Time" unitData={unitData} />
      </CardContent>
    </Card>
  );
}
