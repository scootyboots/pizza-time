import React, { Component, useState, useEffect } from 'react'

const Text = ({ content, delay }) => {

  const splitContent = content.split('')
  const [incContent, incrementContent] = useState(splitContent[0]) 
  const [timeouts, addTimeout] = useState([])

  useEffect(() => {

    if (incContent.length < splitContent.length) {
        const letterTimeout = setTimeout(() => {
        incrementContent(incContent + splitContent[incContent.length])
      }, 1 * delay)
      addTimeout([...timeouts, letterTimeout])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [incContent])

  useEffect(() => {
    incrementContent(splitContent[0])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content])

  useEffect(() => {
    window.addEventListener("keydown", () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
      if (incContent.length < splitContent.length) return incrementContent(content)
      })
  }, [content, incContent.length, splitContent.length, timeouts])
  


  return (
  <p className="default-text-testing">{incContent}</p> 
  )
}

export default Text