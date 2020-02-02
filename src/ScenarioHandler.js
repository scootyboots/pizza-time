import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import allScenarios from './scenario-data/index'
import Default from './scenarios/Default'
import Messenger from './scenarios/Messenger'

const ScenarioHandler = ({ match }) => {

  let { params } = match;
  const scenario = allScenarios[params.scenarioId]
  console.log(match)
  console.log(params.scenarioId)
  console.log(scenario.type)
  console.log('hello world')

  if (scenario.type === 'Default') {
    return <Default scenario={scenario} scenarioID={params.scenarioId}/>  
  } else if (scenario.type === 'Messenger') {
    return <Messenger scenario={scenario} />
  } else {
    return (
      <div>
        did not load a componenet
      </div>
    )
  }
};


export default ScenarioHandler