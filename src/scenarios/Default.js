import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import allScenarios from '../scenario-data/index'
import Notification from '../scenarios/Notification'

const Default = ({ image, events, buttons, click, match }) => {
  let { params } = match;
  const scenario = allScenarios[params.scenarioId]
  console.log(match)
  return (
    
    <div className={scenario.type}>

       {scenario.events.map(( { type }, i ) => {
         if ( type === 'text' ) { return <p>{scenario.events[i].content}</p> }
         if ( type === 'image' ) { return <img src={scenario.events[i].content} alt={scenario.events[i].alt}/> }
       })}

      {scenario.answers.map(({ text, key }) => {
        params.scenarioId = key
        return (
          <Link to={`/game/${key}`}>{text}</Link>
        )
      })}

      {scenario.notification.active === true ? <Notification number={scenario.notification.number} notiKey={scenario.notification.key} /> : null}
      
    </div>
  )
};

export default Default