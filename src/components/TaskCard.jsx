import { useState } from 'react'
import { useTasks } from '../context/TaskContext'

function TaskCard({ id, title, description, done }) {
  // Här hämtar vi funktionerna från vår globala "låda"
  const { handleDelete, handleToggle, handleEdit } = useTasks()
  const [isEditing, setIsEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(title)
  const [newDescription, setNewDescription] = useState(description)

  const handleSave = () => {
    handleEdit(id, newTitle, newDescription)
    setIsEditing(false)
  }

  const taskStyle = {
    textDecoration: done ? 'line-through' : 'none',
    opacity: done ? 0.6 : 1,
    padding: '10px',
    border: '1px solid #ccc',
    margin: '5px 0'
  }

  return (
    <div style={taskStyle} className={`glass-card ${done ? 'done' : ''}`}>
      {isEditing ? (
        <div className="edit-mode">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleSave}>Spara</button>
          <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Avbryt</button>
        </div>
      ) : (
        <div className="view-mode">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="btn btn-secondary" onClick={() => setIsEditing(true)}>Redigera</button>
        </div>
      )}

      {/* Här anropar vi funktionerna direkt från context */}
      <button className="btn btn-success" onClick={() => handleToggle(id)}>
        {done ? 'Ångra ↩️' : 'Klar ✅'}
      </button>
      <button className="btn btn-danger" onClick={() => handleDelete(id)}>Ta bort</button>
    </div>
  )
}

export default TaskCard