import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import linkedIn from "../images/linkedIn.png";
import styles from "./SignIn.module.scss";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // Create New Account
  const register = (e) => {
    e.preventDefault();
  };
  // Log in
  const login = (e) => {
    e.preventDefault();
  };
  return (
    <div className={styles.signIn}>
      <img src={linkedIn} alt="linkedin icon" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name (required if registering)"
          type="text"
        />
        <input placeholder="profile pic URL (Optional)" type="text" />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="text"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="text"
        />
        <button type="submit" onClick={login}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className={styles.signIn__register} onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
}

export default SignIn;
