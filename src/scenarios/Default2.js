import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'

class Default2 extends Component {

  componentDidMount() {
    const texts = Array.from(document.querySelectorAll('.default-text'))
    texts.forEach((text) => console.log(text))
    
    
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default Default2