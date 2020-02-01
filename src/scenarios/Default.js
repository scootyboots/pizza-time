import React, { Component, useEffect } from 'react'
import { Link } from 'react-router-dom'
import allScenarios from '../scenario-data/index'
import Notification from '../scenarios/Notification'

const Default = ({ image, events, buttons, click, match }) => {

  let { params } = match;
  const scenario = allScenarios[params.scenarioId]
  console.log(match)

  const renderContent = (type, i) => {
    if ( type === 'text' ) return <p className="default-text">{scenario.events[i].content}</p> 
    if ( type === 'image' ) return <img src={scenario.events[i].content} alt={scenario.events[i].alt}/> 
  }

  setTimeout(() => console.log('cool timeout bro'), 2 * 1000)

  let poop = 'a;dkjsssd;lsadk ;asld;s'
  poop.split('').map((car, i) => setTimeout(() => console.log(car), i * 1000))

  useEffect(() => {
    const texts = Array.from(document.querySelectorAll('.default-text'))
    console.log(texts)
    texts.forEach((text, i) => {
      setTimeout(() => text.classList.add('default-text-animation'), i === 0 ? 0 : i * 1000)
    })
  })

  return (
    
    <div className={scenario.type}>
      <div className="content-container">
      {scenario.events.map(( { type }, i ) => renderContent(type, i))}
       </div>

      <div className="next-container">
      {scenario.answers.map(({ text, key }) => {
        params.scenarioId = key
        return (
          <Link to={`/game/${key}`}>{text}</Link>
        )
      })}
      </div>

      {scenario.notification.active === true ? <Notification number={scenario.notification.number} notiKey={scenario.notification.key} /> : null}
      
    </div>
  )
};


export default Default