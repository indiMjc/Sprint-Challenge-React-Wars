import React from "react";
import { CardSubtitle } from "reactstrap";

const BirthYears = props => (
  <CardSubtitle key={props.keyGen}>Birthyear: {props.birthYear}</CardSubtitle>
);

export default BirthYears;
