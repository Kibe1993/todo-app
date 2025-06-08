import classes from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <section className={classes.section}>
      <header className={classes.header}>
        <h1>Add Your Todos</h1>
      </header>

      <main>
        <form className={classes.form}>
          <div className={classes.inputGroup}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter todo title"
              required
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Enter description"
              required
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="date">Date</label>
            <input type="date" id="date" required />
          </div>

          <button type="submit" className={classes.button}>
            Add Todo
          </button>
        </form>
      </main>
    </section>
  );
}
