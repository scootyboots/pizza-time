import React, {Component} from 'react'

const Default = ({ image, events, buttons, click }) => (
  <div className="default">
    <img src={image} width="200px" alt="emotions are hard"/>

    {events.map(event => {
      if (event.destination) {
        return <div onClick={() => {click(event.destination)}}>{event.content}</div>
      } else {
        return event.content
      }
    })}

    {buttons.map((button) => <button onClick={() => {click(button.destination)}}>{button.name}</button>)}
  </div>
);

export default Default