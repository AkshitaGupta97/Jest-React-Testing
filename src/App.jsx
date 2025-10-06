
import { useState } from 'react'
import './App.css'
import Button from './Component/Button'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h2>React Testing with : JEST</h2>
      <h3>By: Your Name</h3>
      <p>This is a simple React application to demonstrate testing with Jest.</p>
      <hr />
      <h3>{count}</h3>
      <Button onClick={() => setCount(count + 1)}>
        Increment
      </Button>
    </>
  )
}

export default App
