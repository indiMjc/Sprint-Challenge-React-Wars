import React from "react";
import axios from "axios";

const NextButton = props => {
  const getNextData = url => {
    axios.get(url).then(response => {
      console.log(response);
      props.setStates(response.data.results);
      props.setNextPage(response.data.next);
      props.setPrev(response.data.previous);
    });
  };

  return <button onClick={() => getNextData(props.nextSet)}>Next Page</button>;
};

export default NextButton;
