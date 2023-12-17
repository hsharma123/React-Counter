import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);
  const changeCounter = () => {
    setCounter(counter + 1);
    }
  return (
      <div>
          <h1>Counter</h1>
          <p>Counter:{counter}</p>
          <button onClick={changeCounter}> Update</button>
      </div>
  )
}

export default Counter