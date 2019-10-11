import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Names from "./components/names";
import BirthYears from "./components/birthyears";
import Gender from "./components/gender";
import Mass from "./components/mass";

const App = () => {
  // const [name, setName] = useState([]);
  // const [birthYear, setBirthYear] = useState([]);
  // const [species, setSpecies] = useState([]);
  // const [gender, setGender] = useState([]);
  // const [mass, setMass] = useState([]);

  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setPeople(response.data.results);
        console.log(response.data);
      })
      .catch(error => {
        console.log("Data not returned", error);
      });
  }, [setPeople]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      {people.map((person, i) => (
        <>
          <Names key={person.name} name={person.name} />
          <BirthYears key={person.birth_year} birthYear={person.birth_year} />
          <Gender key={person.gender} genders={person.gender} />
          <Mass key={person.mass} masses={person.mass} />
        </>
      ))}
    </div>
  );
};

export default App;
