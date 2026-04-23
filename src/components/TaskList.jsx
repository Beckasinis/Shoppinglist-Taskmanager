import TaskCard from './TaskCard'

function TaskList({ tasks }) {
  // Om listan är tom, visa ett meddelande
  if (tasks.length === 0) {
    return <p>Inga uppgifter finns att visa.</p>
  }
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          title={task.title}
          description={task.description}
          done={task.done}
        />
      ))}
    </div>
  );
}

export default TaskList