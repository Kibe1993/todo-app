"use client";
import { SignInButton, useUser } from "@clerk/nextjs";
import classes from "./page.module.css";
import Dashboard from "@/Components/Dashboard";
import Tasks from "@/Components/Tasks";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const { user } = useUser();
  const [todolist, setTodolist] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
  });

  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
    console.log(formData);
  }

  async function fetchTodos() {
    try {
      const response = await axios.get("/api");
      setTodolist(response.data.todos);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    fetchTodos();
  }, []);

  async function deleteTodo(id) {
    await axios.delete("/api", {
      params: { mongoId: id },
    });

    fetchTodos();
  }

  async function completeTodo(id) {
    await axios.put(
      "/api",
      {},
      {
        params: {
          mongoId: id,
        },
      }
    );
    fetchTodos();
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const { title, description, date } = formData;

    if (!title.trim() || !description.trim() || !date) {
      alert("All fields are required.");
      return;
    }

    await axios.post("/api", formData);
    setFormData({
      title: "",
      description: "",
      date: "",
    });

    fetchTodos();

    try {
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="container">
      {user ? (
        <div className={classes.inputOutput}>
          <Dashboard
            handleInputChange={handleInputChange}
            formData={formData}
            onSubmit={handleSubmit}
          />
          <Tasks
            todolist={todolist}
            deleteTodo={deleteTodo}
            completeTodo={completeTodo}
          />
        </div>
      ) : (
        <main className={classes.main}>
          <h1>Manage Your Todos</h1>
          <p>Sign-in to create your todolist</p>

          <SignInButton mode="modal">
            <button>{user ? "Dashboard" : "Sign In"}</button>
          </SignInButton>
        </main>
      )}
    </div>
  );
}
