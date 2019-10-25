import React, { Component } from 'react'
import { Link, useParams } from 'react-router-dom'

const Default2 = ({ image, events, buttons, click }) => {
  const params = useParams()
  return (
    <div className="default">
      <h2>Hello my darling</h2>
      <pre>{JSON.stringify(params)}</pre>
    </div>
  );
}

export default Default2