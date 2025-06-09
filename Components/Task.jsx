"use client";
import styles from "./Task.module.css";
export default function Task({
  title,
  date,
  description,
  isCompleted,
  index,
  mongoId,
  deleteTodo,
  completeTodo,
}) {
  return (
    <tr className={styles.row}>
      <th scope="row" className={styles.cellHeader}>
        {index + 1}
      </th>
      <td className={styles.cell}>{title}</td>
      <td className={styles.cell}>{description}</td>
      <td className={styles.cell}>
        {new Date(date).toLocaleDateString("en-KE", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </td>
      <td className={styles.cell}>{isCompleted ? "Done" : "Pending"}</td>
      <td className={styles.cell}>
        <button onClick={() => completeTodo(mongoId)}>Completed</button>
        <button onClick={() => deleteTodo(mongoId)}>Delete</button>
      </td>
    </tr>
  );
}
