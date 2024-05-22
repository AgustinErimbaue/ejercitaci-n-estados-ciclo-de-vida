import React from "react";
import "./Card.css";
const Card = ({ infoCharacter }) => {
  return (
    <div className="card-container">
      <div className="card">
        <h3 className="card-title">{infoCharacter.name}</h3>
        <p>
          <strong>Height:</strong> {infoCharacter.height} cm
        </p>
        <p>
          <strong>Mass:</strong> {infoCharacter.mass} kg
        </p>
        <p>
          <strong>Hair Color:</strong> {infoCharacter.hair_color}
        </p>
        <p>
          <strong>Skin Color:</strong> {infoCharacter.skin_color}
        </p>
        <p>
          <strong>Eye Color:</strong> {infoCharacter.eye_color}
        </p>
        <p>
          <strong>Birth Year:</strong> {infoCharacter.birth_year}
        </p>
        <p>
          <strong>Gender:</strong> {infoCharacter.gender}
        </p>
      </div>
    </div>
  );
};

export default Card;
