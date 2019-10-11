import React from "react";
import axios from "axios";

const PreviousButton = props => {
  const getPreviousData = url => {
    axios.get(url).then(response => {
      console.log(response);
      props.setStates(response.data.results);
    });
  };

  return (
    <button onClick={() => getPreviousData(props.prev)}>Previous page</button>
  );
};

export default PreviousButton;
