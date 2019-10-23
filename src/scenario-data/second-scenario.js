import React from "react"
import croost from "../images/crooster.jpg";

const scenarioData = {
  id:2,
  name:"Second Scenario",
  fileName:"second-scenario.js",
  path:"second-scenario",
  image: croost,
  events: [
    {content: <p>event3</p>}, 
    {content: <p>event4</p>}
  ],
  buttons: [
    {name:"button one", destination:"second-scenario.js"},
    {name:"button two", destination:"third-scenario.js"},
  ]
};

export default scenarioData;