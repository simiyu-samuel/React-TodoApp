import { useState } from 'react'
import TodoList from './todoList.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <TodoList />
    </div>
  )
}

export default App
