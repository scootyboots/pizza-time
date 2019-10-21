import React from "react"
import croost from "../images/crooster.jpg";
import secondScenario from "./second-scenario"

const scenarioData = {
  id:1,
  name:"First Slide",
  fileName:"first-scenario.js",
  image: croost,
  events: [<p>event1</p>, <p>event2</p>],
  buttons: [
    {name:"button one", destination: secondScenario},
    {name:"button two", destination:"third-scenario.js"},
  ]
};

export default scenarioData;