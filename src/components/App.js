import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [planetArray, setPlanetArray] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect (() => {
    fetch("http://localhost:8003/planeteers")
    .then((res) => res.json())
    .then(data => setPlanetArray(data));
  }, []);

  const filteredPlanets = planetArray.filter((planet) => planet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 

  return (
    <div>
      <Header />
      <SearchBar searchTerm = {searchTerm} onChange = {setSearchTerm}/>
      <RandomButton />
      <PlaneteersContainer planetArray = {filteredPlanets}/>
    </div>
  );
}

export default App;
