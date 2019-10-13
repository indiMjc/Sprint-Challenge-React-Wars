import React from "react";
import { CardSubtitle } from "reactstrap";

const Gender = props => (
  <CardSubtitle key={props.keyGen}>Gender: {props.genders}</CardSubtitle>
);

export default Gender;
