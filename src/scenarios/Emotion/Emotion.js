import React, {Component} from 'react'
import './Emotion.styles.css'

const Emotion = ({ text, img }) => (
  <div className="emotion-container">
    <div className="emotion-img">
      <img src={img} alt="emotion" />
    </div>
    <div className="emotion-text">
      <p>MOOD: {text}</p>
    </div>
  </div>
)

export default Emotion