import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1)
    }

    const handleDecrement = () => {
        console.log(count)
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
        }
    }
  return (
    <div>
        Counter: {count}
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
    </div>
  )
}
