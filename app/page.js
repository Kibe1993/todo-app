"use client";
import { SignInButton, useUser } from "@clerk/nextjs";
import classes from "./page.module.css";
import Dashboard from "@/Components/Dashboard";
export default function Home() {
  const { user } = useUser();
  return (
    <div className="container">
      {user ? (
        <Dashboard />
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
