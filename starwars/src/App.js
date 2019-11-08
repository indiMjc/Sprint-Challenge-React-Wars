import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Names from "./components/names";
import BirthYears from "./components/birthyears";
import Gender from "./components/gender";
import Mass from "./components/mass";
import NextButton from "./components/nextButton";
import PreviousButton from "./components/previousButton";

const App = () => {
  const [people, setPeople] = useState([]);
  const [next, setNext] = useState([]);
  const [previous, setPrevious] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response);
        setPeople(response.data.results);
        setNext(response.data.next);
      })
      .catch(error => {
        console.log("Data not returned", error);
      });
  }, [setPeople]);

  let keyCount = 0;

  const getKey = () => keyCount++;

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="cards">
        {people.map((person, i) => (
          <div key={getKey()} className="card-container">
            <Names key={getKey()} keyGen={getKey()} name={person.name} />
            <BirthYears
              key={getKey()}
              keyGen={getKey()}
              birthYear={person.birth_year}
            />
            <Gender key={getKey()} keyGen={getKey()} genders={person.gender} />
            <Mass key={getKey()} keyGen={getKey()} masses={person.mass} />
          </div>
        ))}
      </div>
      <PreviousButton
        prev={previous}
        setStates={setPeople}
        setPrev={setPrevious}
      />
      <NextButton
        nextSet={next}
        setStates={setPeople}
        setPrev={setPrevious}
        setNextPage={setNext}
      />
    </div>
  );
};

export default App;
