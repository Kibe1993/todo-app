import { useState } from "react";
import classes from "./Dashboard.module.css";

export default function Dashboard({ handleInputChange, formData, onSubmit }) {
  const { title, description, date } = formData;
  return (
    <section className={classes.section}>
      <header className={classes.header}>
        <h1>Add Your Todos</h1>
      </header>

      <main>
        <form className={classes.form} onSubmit={onSubmit}>
          <div className={classes.inputGroup}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="Enter todo title"
              required
              name="title"
              onChange={handleInputChange}
              value={title}
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Enter description"
              required
              name="description"
              onChange={handleInputChange}
              value={description}
            />
          </div>

          <div className={classes.inputGroup}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              required
              name="date"
              onChange={handleInputChange}
              value={date}
            />
          </div>

          <button type="submit" className={classes.button}>
            Add Todo
          </button>
        </form>
      </main>
    </section>
  );
}
