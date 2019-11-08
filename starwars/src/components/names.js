import React from "react";
import { CardTitle } from "reactstrap";

const Names = props => {
  return <CardTitle key={props.keyGen}>{props.name}</CardTitle>;
};
export default Names;
