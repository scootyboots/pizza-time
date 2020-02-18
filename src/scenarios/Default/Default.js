import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import allScenarios from '../../scenario-data/index'
import Notification from '../Notification'
import Text from '../Text'
import Emotion from '../Emotion/Emotion'

const Default = ({ scenario, scenarioID }) => {
  console.log(scenarioID)
  const [event, changeEvent] = useState([scenario.events[0]])
  const [delays, changeDelay] = useState({text: 50, img: 750})

  console.log('-------------- scenario Default received --------------')
  console.log(scenario)
  console.log('-------------- Default event state --------------')
  console.log(event)

  useEffect(() => {

    window.addEventListener("keydown", () => {
      if (event[0] !== scenario.events[0]) {
        changeEvent([scenario.events[0]])

      } else if (event.length < scenario.events.length) {
        changeEvent([...event, scenario.events[event.length]])
        console.log(event.length)
        console.log(scenario.events.length)
      }
    })
    

    const calcTimeout = (event) => {
      return event.type === 'text' ? event.content.length * delays.text : delays.img
    }

    

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[event, scenario])

  useEffect(() => {
    console.log('---------- scenario.event change detected ----------')
    changeEvent([scenario.events[0]])
    console.log('set event to')
    console.log([scenario.events[0]])
    // changeDelay({text: 50, img: 750})
    // rest state in case the scenario event changes 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scenario])

  const renderContent = ( type, content, alt, i ) => {
    if ( type === 'text' ) return <Text content={content} delay={delays.text} key={scenarioID + i}/>
    // if ( type === 'text' ) return <p>{content}</p>
    if ( type === 'image' ) return <img className="inner-image" src={content} alt={alt} key={scenarioID + i}/> 
    if ( type === 'single-message' ) return <div className="single-message">I AM A SINGLE MESSAGE</div>
  }

  return (
    
    <div className={scenario.type}>
      {scenario.emotion ? <Emotion text={scenario.emotion.text} img={scenario.emotion.img}/> : null}
      <div className="content-container">
        <div className="content-slide-main">
          {event.map(( { type, content, alt }, i ) => renderContent(type, content, alt, i))}

          {/* {scenario.events.map(( { type, content, alt } ) => renderContent(type, content, alt))} */}
          
        </div>
      </div>
      
      <div className="next-container">
      { event.length === scenario.events.length ? scenario.answers.map(({ text, key }) => <Link to={`/game/${key}`}>{text}</Link>) : null}
      </div>

      {scenario.notification.active === true ? <Notification number={scenario.notification.number} notiKey={scenario.notification.key} /> : null}
      
    </div>
  )
};


export default Default