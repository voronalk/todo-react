import React, { useState } from "react";
import styles from './styles.module.css';

export default function ({ task, id, deleteTask, editTask }) {
  const [checked, setChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(task);
  return !isEditing ? (
    <span className={styles.list}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(e.target.checked)}
      ></input>
      <span
        className={checked ? styles.cheked + " " + styles.subtitle : styles.subtitle}
        onDoubleClick={() => setIsEditing(true)}
      >
        {value}
      </span>
      <button className={styles.delete} onClick={() => deleteTask(id)}>
        <span role="img" aria-label="RedCross">
          X
        </span>
      </button>
    </span>
  ) : (
    <span>
      <form className={styles.list}
        onSubmit={(e) => {
          e.preventDefault();
          editTask(id, value);
          setIsEditing(false);
        }}
      >
        <input 
          className={styles.input}
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className={styles.delete}>Edit</button>
      </form>
    </span>
  );
}
