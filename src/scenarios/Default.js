import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import allScenarios from '../scenario-data'
import Scenarios from '../Scenarios';

const Default = ({ image, events, buttons, click, match }) => {
  let { params } = match;
  const scenario = allScenarios[params.scenarioId]

  return (
    <div className="default">
      <h2>{scenario.description}</h2>
      {scenario.answers.map(({ text, key }) => {
        params.scenarioId = key
        return (
          <Link to={`/scenarios/${key}`}>{text}</Link>
        )
      })}

      

      {/* <img src={image} width="200px" alt="emotions are hard"/>

      {events.map(event => {
        if (event.destination) {
          return <div onClick={() => {click(event.destination)}}>{event.content}</div>
        } else {
          return event.content
        }
      })}
      {buttons.map((button) => <Link to={button.nextScenario.path} onClick={() => {click(button.nextScenario)}}>{button.text}</Link>)}
      {buttons.map((button) => <button onClick={() => {click(button.destination)}}>{button.name}</button>)} */}
    </div>
  )
};

export default Default