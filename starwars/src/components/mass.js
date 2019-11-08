import React from "react";
import { CardSubtitle } from "reactstrap";

const Mass = props => (
  <CardSubtitle key={props.keyGen}>Mass: {props.masses}</CardSubtitle>
);

export default Mass;
