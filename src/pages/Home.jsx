import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'
import { useTasks } from '../context/TaskContext'
import { useState } from 'react'

function Home() {
  const { tasks } = useTasks()
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const filteredTasks = tasks
    .filter((task) => {
      if (filter === 'active') return !task.done
      if (filter === 'completed') return task.done
      return true
    })
    .filter((task) =>
      task.title.toLowerCase().includes(search.toLowerCase())
    )

  const sortedTasks = [...filteredTasks].sort((a, b) => a.done - b.done)

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Sök uppgift..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="filter-bar">
        <button
          className={`btn-filter ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}>Alla</button>
        <button
          className={`btn-filter ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}>Att göra</button>
        <button
          className={`btn-filter ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}>Klara</button>
      </div>
      <TaskForm />
      <TaskList tasks={sortedTasks} />
    </div>
  )
}

export default Home