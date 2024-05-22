import React, { useState } from "react";
import './List.css';

const List = () => {
  const [nameProfresor, setName] = useState("Sofia");
  const names = ["Data", "Reyes", "Yolanda"];

  const changeName = (newName) => {
    setName(newName);
  };
  
  const newAraay = names.map((name, index) => {
    return (
      <ul key={index}>
        <li onClick={() => changeName(name)}>{name}</li>
      </ul>
    );
  });

  return (
    <div>
      <div>
        <h2>Teacher Name : {nameProfresor}</h2>
      </div>
      {newAraay}
      <div></div>
    </div>
  );
};

export default List;
