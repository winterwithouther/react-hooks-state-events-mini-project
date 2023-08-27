import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const initial = {text: "" , category: ""}
  const [newTask, setNewTask] = useState(initial)


const list = categories.map((category) => {
  if (category !== "All") {
    return (
        <option
            key={category}
            value={category}
        >
          {category}
        </option>
  )}
})

function handleForm(event) {
  const {name, value} = event.target
  setNewTask({...newTask, [name]: value})
  console.log(name)
  console.log(value)
}

function handleSubmit(event) {
  event.preventDefault()
  onTaskFormSubmit(newTask)
}


  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" value={newTask.text} onChange={handleForm}/>
      </label>
      <label>
        Category
        <select name="category" value={newTask.category} onChange={handleForm}>
          {list}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
