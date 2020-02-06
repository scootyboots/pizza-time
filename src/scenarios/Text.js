import React, { Component, useState, useEffect, useCallback } from 'react'

const Text = ({ content, delay }) => {

  const splitContent = content.split('')
  const [incContent, incrementContent] = useState(splitContent[0]) 


  useEffect(() => {

    // const finishRender = (inc) => {
    //   clearTimeout(inc)
    //   incrementContent(content)
    // }

    if (incContent.length < splitContent.length) {
        setTimeout(() => {
        incrementContent(incContent + splitContent[incContent.length])
      }, 1 * delay)

      // window.addEventListener("keydown", () => finishRender(inc))
      // window.addEventListener("click", () => finishRender(inc))
    }
  })


  return (
  <p className="default-text-testing">{incContent}</p> 
  )
}

export default Text