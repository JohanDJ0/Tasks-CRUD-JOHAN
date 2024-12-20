import { useEffect } from "react"
import { useTasks } from "../context/tasksContext"
import Taskcard from '../components/TaskCard'

function TaskPage() {

  const { getTasks, tasks} = useTasks()

  useEffect(() =>{
    getTasks();
  }, []);

  if (tasks.length ==0) return (<h1>No hay tareas</h1>);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {
        tasks.map((task) => (
        <Taskcard task={task} key={task._id}/>
        ))
      }
    </div>
  )
}

export default TaskPage
