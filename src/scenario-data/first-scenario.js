import React from "react"
import croost from "../images/crooster.jpg";
import secondScenario from "./second-scenario"

const scenarioData = {
  id:1,
  name:"First Scenario",
  fileName:"first-scenario.js",
  path:"/first-scenario",
  image: croost,
  events: [
    {content: <p>event1</p>}, 
    {content: <p>event2</p>}
  ],
  buttons: [
    {text:"button one", nextScenario: secondScenario},
    {text:"button two", nextScenario:"third-scenario.js"},
  ]
};

export default scenarioData;