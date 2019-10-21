import React from "react"
import croost from "../images/crooster.jpg";

const scenarioData = {
  id:2,
  name:"Second Slide",
  fileName:"second-scenario.js",
  image: croost,
  events: [<p>event3</p>, <p>event4</p>],
  buttons: [
    {name:"button one", destination:"second-scenario.js"},
    {name:"button two", destination:"third-scenario.js"},
  ]
};

export default scenarioData;