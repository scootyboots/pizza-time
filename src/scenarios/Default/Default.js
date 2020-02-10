import React, { Component, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import allScenarios from '../../scenario-data/index'
import Notification from '../Notification'
import Text from '../Text'
import Emotion from '../Emotion/Emotion'

const Default = ({ scenario }) => {

  const [event, addEvent] = useState([scenario.events[0]])
  const [delays, changeDelay] = useState({text: 50, img: 750})

  const splitContent = event.content.split('')
  const [incContent, incrementContent] = useState(splitContent[0]) 

  useEffect(() => {
    window.addEventListener("keydown", () => changeDelay({ text: 0, img: 0 }))
    window.addEventListener("click", () => changeDelay({ text: 0, img: 0 }))

    const calcTimeout = (event) => {
      return event.type === 'text' ? event.content.length * delays.text : delays.img
    }

    if (event.length < scenario.events.length) { 
      setTimeout(() => {
        addEvent([...event, scenario.events[event.length]])
        console.log(scenario.events[event.length - 1].type)
      }, calcTimeout(scenario.events[event.length - 1]))  
      changeDelay({ text: 50, img: 750 }) 
    }

    if (incContent.length < splitContent.length) {
      setTimeout(() => {
      incrementContent(incContent + splitContent[incContent.length])
    }, 1 * delays.text)
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [event, incContent])



  const renderContent = ( type, content, alt ) => {
    if ( type === 'text' ) return <p>{incContent}</p>
    if ( type === 'image' ) return <img className="inner-image" src={content} alt={alt}/> 
    if ( type === 'single-message' ) return <div className="single-message">I AM A SINGLE MESSAGE</div>
  }

  return (
    
    <div className={scenario.type}>
      {scenario.emotion ? <Emotion text={scenario.emotion.text} img={scenario.emotion.img}/> : null}
      <div className="content-container">
        <div className="content-slide-main">
          {event.map(( { type, content, alt } ) => renderContent(type, content, alt))}
        </div>
      </div>
      
      <div className="next-container">
      {scenario.answers.map(({ text, key }) => <Link to={`/game/${key}`}>{text}</Link>)}
      </div>

      {scenario.notification.active === true ? <Notification number={scenario.notification.number} notiKey={scenario.notification.key} /> : null}
      
    </div>
  )
};


export default Default