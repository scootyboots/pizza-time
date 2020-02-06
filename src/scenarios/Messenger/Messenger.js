import React, { Component, useState, useEffect } from 'react'
import allScenarios from '../../scenario-data/index'
import './Messenger.style.css'

const Messenger = ({ scenario }) => {
  console.log(scenario)
  console.log(scenario.events)
  console.log(scenario.events.length)

  const [message, addMessage] = useState([scenario.events[0]]) 
  

  console.log('------------ THIS IS NEW MESSAGE ------------------')
  console.log(message)

  useEffect(() => {
    if (message.length < scenario.events.length) {
      setTimeout(() => {
        addMessage([...message, scenario.events[message.length]])
      }, 2 * 1000) }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message])
  

  const decideMessage = (event) => {
    console.log('decide message called')
    if (event.type === 'sent') return <div className="sent"><div className="butten-wrap-sent">{event.text}</div></div>
    if (event.type === 'received') return <div className="received"><div className="butten-wrap-received">{event.text}</div></div>
    if (event.type === 'thought') return <div className="thought">{event.text}</div>
  }

  // setTimeout( () => decideMessage(scenario.events[1]), 1 * 1000 )

  return (
    <div className="content-container">
      <div>sick messenger app</div>
      <div className="messenger-container">
        {message.map((message) => decideMessage(message))}
      </div>
    </div>

  )
}

export default Messenger