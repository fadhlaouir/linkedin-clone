import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../firebase/firebase";
import linkedIn from "../images/linkedIn.png";
import { signin } from "../features/userSlice";
import styles from "./SignIn.module.scss";

function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");

  //use dispatch to push the user into the redux store
  const dispatch = useDispatch();

  // Log in
  const login = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          signin({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoURL: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  // Create New Account
  const register = (e) => {
    if (!name) {
      return alert("Please enter your full name");
    }
    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user
        .updateProfile({
          displayName: name,
          photoURL: profilePic,
        })
        .then(() => {
          dispatch(
            signin({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: profilePic,
            })
          );
        })
        .catch((error) => alert(error));
    });
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
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (Optional)"
          type="text"
        />
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
          type="password"
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
