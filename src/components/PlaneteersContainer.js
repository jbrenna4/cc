import React from "react";
import Planeteer from "./Planeteer";

function PlaneteersContainer({planetArray}) {

  const newPlanetAray = planetArray.map((planet) => {
    return (<Planeteer
      key = {planet.id}
      name = {planet.name}
      fromUSA = {planet.fromUSA}
      born = {planet.born}
      bio = {planet.bio}
      quote = {planet.quote}
      pictureUrl = {planet.pictureUrl}
      twitter = {planet.twitter}
      />);
  });

  return (
    <ul className="cards">
      {newPlanetAray}
    </ul>
  );
}

export default PlaneteersContainer;
