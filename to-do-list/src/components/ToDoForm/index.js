import React, { useState } from "react";
import Task from "../Task";
import styles from "./styles.module.css"

export default function (props) {
  const [toDoList, setToDoList] = useState([]);
  const [input, setInput] = useState("");

  function deleteTask(id) {
    setToDoList(toDoList.filter((task, index) => index !== id));
  }

  function editTask(id, newValue) {
    setToDoList(
      toDoList.map((task, index) => {
        if (index === id) return newValue;
        return task;
      })
    );
  }

  return (
    <div
      className={styles.container}
    >
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          setToDoList([...toDoList, input]);
          setInput("");
        }}
      >
        <div className={styles.title}>ToDoList</div>
        <div className={styles.subtitle}>Add a task to your list:</div>
        <div className={styles.inputContainer}>

          <input
            className={styles.input}
            type="text"
            name="textInput"
            value={input}
           onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <button type="submit"
          className={styles.submit}
        >
          Add to list
        </button>
      </form>
      <br/>
      <label className={styles.subtitleBig}>Tasks:</label>
      <div className={styles.listContainer}>
        {toDoList.map((task, index) => {
          return (
            <Task
              key={Math.random()}
              id={index}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          );
        })}
      </div>
    </div>
  );
}
