import React from "react";

function AddTask({ tasklist, setTaskList, task, setTask }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.task.value);

    let updatedTask;

    // Editing phase
    if (task && task.id) {
      const date = new Date();
      updatedTask = tasklist.map((element) =>
        element.id === task.id
          ? {
              id: task.id,
              name: e.target.task.value,
              time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
            }
          : { id: element.id, name: element.name, time: element.time }
      );
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      setTaskList([...tasklist, newTask]);
      setTask(null);
    }

    if (updatedTask) {
      setTaskList(updatedTask);
      setTask(null); //clears the input field when the user updates their task
    }

    e.target.task.value = ""; 
  };

  const isEditing = task && task.id; //If the task is defined and edited it will be true.

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          autoComplete="off"
          placeholder="Add task"
          maxLength={25}
          value={task ? task.name : ""}
          // Add a default value of an empty string if task or task.name is not defined
          // This ensures the input starts as a controlled component
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        ></input>
        <button type="submit">{isEditing ? "Update" : "Add"}</button>
      </form>
    </section>
  );
}

export default AddTask;
