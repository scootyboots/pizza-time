import React, { Component } from 'react'
import Default from './scenarios/Default'
import { Route, Link } from 'react-router-dom'
import allScenarios from './scenario-data/index'
import croost from "./images/crooster.jpg";


class Scenarios extends Component {
  
  render () {
    const { match } = this.props;
    console.log(this.props)
    console.log(match)

    if (match.isExact === true) {
      return (
      
        <div>
          <h1>THIS IS THE SCENARIOS COMPONENT</h1>
          <img src={croost} alt="crooster the rooster"/>
          <p>Something giving some context for why this game exists</p>
          <Link to={`${match.path}/${Object.keys(allScenarios)[0]}`}>We'll start the game at home - READY? GO?</Link>
        </div>
      )
    } else {
      return (
        <div>
          <Route path={`${match.path}/:scenarioId`} component={Default} />
        </div>
      )
    }
  }  
}

export default Scenarios
