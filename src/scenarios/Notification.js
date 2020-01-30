import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Notification = ( {number, notiKey} ) => (
  <div className="notification">
    {console.log(number, notiKey)}
    You have: {number} notifications!!!
    <Link to={`/game/${notiKey}`}>Check them out!</Link>
  </div>
)

export default Notification