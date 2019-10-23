import React from "react"
import croost from "../images/crooster.jpg";
import secondScenario from "./second-scenario"

const scenarioData = {
  id:1,
  name:"First Scenario",
  fileName:"first-scenario.js",
  path:"first-scenario",
  image: croost,
  events: [
    {content: <p>event1</p>}, 
    {content: <p>event2</p>}
  ],
  buttons: [
    {name:"button one", destination: secondScenario},
    {name:"button two", destination:"third-scenario.js"},
  ]
};

export default scenarioData;