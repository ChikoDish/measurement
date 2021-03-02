import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Form from "./Form";
import { Typography } from "@material-ui/core";

export default function Length() {
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
    <Card>
      <CardContent>
        <Typography>Length</Typography>
        <Form title="Length" unitData={unitData} />
      </CardContent>
    </Card>
  );
}
