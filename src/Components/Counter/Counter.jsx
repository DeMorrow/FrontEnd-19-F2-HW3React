import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  const onIncrement = () => setCount((prev) => prev + Math.floor(Math.random() * (50 - 0)))
  const onDecrement = () => setCount((prev) => prev - Math.floor(Math.random() * (50 - 0)))
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrement}>INC</button>
      <button onClick={onDecrement}>DEC</button>
    </div>
  )
}

export default Counter;