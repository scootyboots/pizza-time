import React, { Component, useState, useEffect, useCallback } from 'react'

const Text = ({ content }) => {

  const [incContent, incrementContent] = useState('') 

  // content.split('').forEach((car, i) => {
  //   return setTimeout(() => {
  //     incContent + car
  //     console.log(incContent)
  //   }, i * 500)
  // }

  useEffect(() => {
    content = content.split('')[1]
    console.log('now this is content ' + content)
  })


  // useEffect(() => {
    // content.split('').forEach((car, i) => {
    //   console.log(incContent + car)
    //   return incrementContent(incContent + car)
    // })
  //    const car1 = content.split('')[3]
  //    incrementContent(incContent + car1)
  // }, [content, incContent])

  // useEffect(() => {
  //   const contArr = content.split('')
  //   let i = 0
  //   if (i < contArr.length) {
  //     return setTimeout(() => incrementContent(incContent + contArr[i]), i * 500)
  //   }
  // })

  return (
  <p className="default-text-testing">{content}</p> 
  )
}

export default Text