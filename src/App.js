import React, { useEffect } from "react";
import SideBar from "./Components/SideBar/SideBar";
import Header from "./Components/NavBar/Header";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, signin, signout } from "./features/userSlice";
import { auth } from "./firebase/firebase";
import Feed from "./Components/Feed/Feed";
import styles from "./App.module.scss";
import SignIn from "./Auth/SignIn";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch;
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(
          signin({
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            email: userAuth.email,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        //user is logged out
        dispatch(signout());
      }
    });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      {!user ? (
        <SignIn />
      ) : (
        <div className={styles.app__body}>
          <SideBar />
          <Feed />
        </div>
      )}
    </div>
  );
}

export default App;
