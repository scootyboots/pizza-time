import React, { Component } from 'react'
import Default from './scenarios/Default'
import { Route, Link } from 'react-router-dom'
import allScenarios from './scenario-data/index'
import croost from "./images/crooster.jpg";
import ScenarioHandler from './ScenarioHandler'
// import poop from '/Users/scoffrin/code/pizza-time/src/ScenarioHandler.js'


class Scenarios extends Component {
  
  render () {
    const { match } = this.props;
    // console.log(this.props)
    // console.log(match)

    if (match.isExact === true) {
      return (
      
        <div>
          <h1>THIS IS THE SCENARIOS COMPONENT</h1>
          <img src={croost} alt="crooster the rooster"/>
          <div className="text-box">
            <p className ="default-text">this is a message for all the voo's in the world</p>
            <p className ="default-text">this is a message for all the voo's in the world this is a message for all the voo's in the world</p>
            <p>Something giving some context for why this game exists</p>
          </div>
          <Link to={`${match.path}/${Object.keys(allScenarios)[0]}`}>We'll start the game at home - READY? GO?</Link>
        </div>
      )
    } else { 
      return (
        <div>
          <Route path={`${match.path}/:scenarioId`} component={ScenarioHandler} />
        </div>
      ) 
    } 
  }  
}

export default Scenarios
