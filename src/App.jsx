import React, { useState } from "react"

function App() {

    const [tasks, setTasks] = useState([]); //lista vacía al principio
    const[newTask, setNewTask] = useState("");

    const handleInputChange = (event) =>{
      setNewTask(event.target.value)
    }

    const handleAddTask = () =>{
      if (newTask.trim() !== ''){
        setTasks([...tasks, newTask]);
        setNewTask('')
      }
    }

    const handleDeleteTask = (index) => {
      const updatedTasks = [...tasks]; //Hacé una copia de todas las tareas y guardalas acá
      updatedTasks.splice(index, 1);  //splice va a ubicar el elemento según index y borrar 1 elemento
      setTasks(updatedTasks) //devolver lista actualizada
    }

  return(
    <>
    <div>
   <h1>Lista de Tareas</h1>
    
    <input type="text" 
           placeholder="Agrega una Tarea" 
           value={newTask}
           onChange={handleInputChange}/>
  
    <button onClick={handleAddTask}>Agregar tarea</button>
    <ul>
      {tasks.map((task, index) =>(
        // index = 0
        <li key={index}>
          {/* lavar la ropa */}
            {task} 
            <button onClick={() => handleDeleteTask(index)}>Eliminar :o</button>
        </li>
      ))}
    </ul>
    </div>
  </>
)
}
export default App
