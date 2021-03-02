import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Form from "./Form";
import { Typography } from "@material-ui/core";

export default function Temperature() {
  const unitData = [
    {
      value: "C",
      name: "C",
    },
    {
      value: "F",
      name: "F",
    },
    {
      value: "K",
      name: "K",
    },
    {
      value: "R",
      name: "R",
    },
  ];
  return (
    <Card>
      <CardContent>
        <Typography>Temperature</Typography>
        <Form title="Temperature" unitData={unitData} />
      </CardContent>
    </Card>
  );
}
