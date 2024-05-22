import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const API_URL = "https://swapi.dev/api/people/ ";

  const getCharacter = () => {
    axios
      .get(API_URL)
      .then((res) => {
        setCharacters(res.data.results);
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <button onClick={getCharacter}>Show characters</button>
      <div>
        {characters.map((character, index) => (
          <Card key={index} infoCharacter={character} />
        ))}
      </div>
    </div>
  );
};

export default Home;
