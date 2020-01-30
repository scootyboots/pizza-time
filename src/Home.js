import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

const Home = () => (
  <div className="home-page">
    <h1>Home Page</h1>
    <p>here's come links to other parts of the site</p>
    <Link exact to="/game">Play the game we made</Link>
    <Link exact to="/donation">donations can go here</Link>
    <Link exact to="/contact">contact can go here too</Link>
  </div>
)

export default Home