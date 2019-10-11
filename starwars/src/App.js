import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Names from "./components/names";
import BirthYears from "./components/birthyears";
import Gender from "./components/gender";
import Mass from "./components/mass";
import NextButton from "./components/nextButton";

const App = () => {
  const [people, setPeople] = useState([]);
  const [next, setNext] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        setPeople(response.data.results);
        setNext(response.data.next);
      })
      .catch(error => {
        console.log("Data not returned", error);
      });
  }, [setPeople]);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="cards">
        {people.map((person, i) => (
          <div className="card-container">
            <Names key={person.name} name={person.name} />
            <BirthYears key={person.birth_year} birthYear={person.birth_year} />
            <Gender key={person.gender} genders={person.gender} />
            <Mass key={person.mass} masses={person.mass} />
          </div>
        ))}
      </div>
      <NextButton nextSet={next} setStates={setPeople} />
    </div>
  );
};

export default App;
