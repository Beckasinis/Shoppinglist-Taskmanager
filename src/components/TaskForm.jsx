import { useState } from 'react'
import { useTasks } from '../context/TaskContext'

function TaskForm() {
  const { handleAddTask } = useTasks()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  function handleSubmit() {
    if (title.trim() === '') {
      setError('Titel får inte vara tom!')
      return
    }
    if (title.trim().length < 3) {
      setError('Titel måste vara minst 3 tecken!')
      return
    }

    handleAddTask({
      id: Date.now(),
      title: title,
      description: description,
      done: false,
    })

    setTitle('')
    setDescription('')
    setError('')
  }

  return (
    <div>
      <h2>Task-Manager</h2>
      <div className="form-card">
        <input
          type="text"
          placeholder="Titel"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            setError('')
          }}
        />
        <input
          type="text"
          placeholder="Beskrivning"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {error && <p className="error">{error}</p>}
        <button className="btn btn-primary" onClick={handleSubmit}>Lägg till</button>
      </div>
    </div>
  )
}

export default TaskForm