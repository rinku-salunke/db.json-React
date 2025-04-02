import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ViewCourses from './ViewCourses'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>JSON DB + AXIOS</h1>
      <ViewCourses/>
    </>
  )
}

export default App
