import { createContext, useContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TaskContext = createContext()

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useLocalStorage('tasks', [])

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  function handleToggle(id) {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    ))
  }

  function handleEdit(id, newTitle, newDescription) {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, title: newTitle, description: newDescription } : task
    ))
  }

  return (
    <TaskContext.Provider value={{ tasks, handleAddTask, handleDelete, handleToggle, handleEdit }}>
      {children}
    </TaskContext.Provider>
  );
}

// En liten custom hook för att enkelt använda contexten
export function useTasks() {
  return useContext(TaskContext);
}