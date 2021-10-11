import React, { useState, useEffect } from 'react'

function Timer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliSeconds, setMilliSeconds] = useState(0);

  function resetTimer() {
    setMilliSeconds(0);
    setSeconds(0);
    setMinutes(0);
  }
  return (
    `${minutes.toString().padStart(2, 0)}:${seconds.toString().padStart(2, 0)}:${milliSeconds} s`
  )
}

export default Timer
