import React from "react";
import { CardTitle } from "reactstrap";

const Names = props => (
  <CardTitle className="text-primary">{props.name}</CardTitle>
);

export default Names;
