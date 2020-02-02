import React, { Component } from 'react'
import allScenarios from '../scenario-data/index'

const Messenger = ({ scenario }) => {
  console.log(scenario)

  const decideMessage = (event) => {
    if (event.type === 'sent') return <div className="sent">{event.text}</div>
    if (event.type === 'received') return <div className="received">{event.text}</div>
    if (event.type === 'thought') return <div className="thought">{event.text}</div>
  }

  return (
    <div className="content-container">
      <div>sick messenger app</div>
      {scenario.events.map( (event) => decideMessage(event) )}
    </div>

  )
}

export default Messenger