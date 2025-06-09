import Task from "./Task";
import styles from "./Tasks.module.css";

export default function Tasks({ todolist, deleteTodo, completeTodo }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {todolist.map(
            (todo, index) =>
              todo && (
                <Task
                  completeTodo={completeTodo}
                  deleteTodo={deleteTodo}
                  key={index}
                  index={index}
                  mongoId={todo._id}
                  {...todo}
                />
              )
          )}
        </tbody>
      </table>
    </div>
  );
}
