import React from "react";
import Task from './Task'

function TaskList({tasks, onDelete}) {

  const taskInfo = tasks.map((task) => (
        <Task 
      key={task.text} 
      text={task.text} 
      category={task.category} 
      onDelete={onDelete}
    />
  ))

  return (
    <div className="tasks">
      {taskInfo}
    </div>
  );
}

export default TaskList;
