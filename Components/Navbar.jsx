"use client";

import Image from "next/image";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
} from "@clerk/nextjs";

import classes from "./Navbar.module.css";
import logo from "../public/logo2.png";

export default function Navbar() {
  const { user } = useUser();
  return (
    <nav className={classes.nav}>
      <div className="container">
        <div className={classes.logo}>
          <Image src={logo} alt="logo" fill style={{ objectFit: "contain" }} />
        </div>

        <div className={!user ? classes.login : null}>
          {user ? (
            <UserButton />
          ) : (
            <SignInButton mode="modal">
              <button>Sign In</button>
            </SignInButton>
          )}
        </div>
      </div>
    </nav>
  );
}
