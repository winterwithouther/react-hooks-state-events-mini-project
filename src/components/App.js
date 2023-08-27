import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data"




function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [allTasks, setAllTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")
  
  const [details, setDetails] = useState('')
  const [category, setCategory] = useState('')
  const [formData, setFormData] = useState([])



  function handleDelete(taskText) {
    const deleteItem = tasks.filter((task) => ( task.text !== taskText))
    setTasks(deleteItem)
  }

    
    
    function filteredTask(categorySelection) {
      const categoryTask = allTasks.filter((task) => categorySelection === "All" ? true : task.category === categorySelection )
      setTasks(categoryTask)
      setSelectedCategory(categorySelection)
      // setSelectedCategory(categorySelection) dont use obj value unless it's the syntax
    }

    function onTaskFormSubmit(newTask) {
      setAllTasks([...allTasks, newTask])
      setTasks([...tasks, newTask])
    }

    // function handleSubmitInput(event) {
    //   event.preventDefault()
    //   const newTask = {
    //     text: event.target.text.value,
    //     category: event.target.category.value
    //   }
    //   const addTask = [...tasks, newTask]
    //   setFormData(addTask)
    // }

   
   

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter filterTasks={filteredTask} categories={categories} selectedCategory={selectedCategory}/>
      <NewTaskForm categories={categories}  category={category} details={details} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={tasks} onDelete={handleDelete} />
    </div>
  );
}

export default App;
