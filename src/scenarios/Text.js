import React, { Component, useState, useEffect } from 'react'

const Text = ({ content, delay }) => {

  const splitContent = content.split('')
  const [incContent, incrementContent] = useState(splitContent[0]) 


  useEffect(() => {

    if (incContent.length < splitContent.length) {
        setTimeout(() => {
        incrementContent(incContent + splitContent[incContent.length])
      }, 1 * delay)
    }
  }, [incContent])


  return (
  <p className="default-text-testing">{incContent}</p> 
  )
}

export default Text