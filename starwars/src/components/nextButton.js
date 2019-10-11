import React from "react";
import axios from "axios";

const NextButton = props => {
  const getNextData = url => {
    axios.get(url).then(response => {
      props.setStates(response.data.results);
    });
  };

  return <button onClick={() => getNextData(props.nextSet)}>Next Page</button>;
};

export default NextButton;
