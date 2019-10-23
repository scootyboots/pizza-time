import React from "react"
import croost from "../images/crooster.jpg";
import firstScenario from "./first-scenario"

const scenarioData = {
  id:1,
  name:"Game Start",
  fileName:"game-start.js",
  // path:"/game-start",
  image: croost,
  events: [ 
    { content:
      <header className="App-header">
        <p className="App-link">I Know You Play the Game</p>
      </header>,
      destination: firstScenario
    }
  ],
  buttons: []
};

export default scenarioData;