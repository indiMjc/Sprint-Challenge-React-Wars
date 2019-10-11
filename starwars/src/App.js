import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [name, setName] = useState([]);
  const [birthYear, setBirthYear] = useState([]);
  const [species, setSpecies] = useState([]);
  const [gender, setGender] = useState([]);
  const [mass, setMass] = useState([]);

  const peopleArray = [];

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        response.data.results.map(person => {
          peopleArray.push(person);
        });
      })
      .catch(error => {
        console.log("Data not returned", error);
      });
  }, [peopleArray]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <h1>{name}</h1>
      <p>{birthYear}</p>
      <p>{species}</p>
      <p>{gender}</p>
      <p>{mass}</p>
    </div>
  );
};

export default App;
