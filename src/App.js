import React from "react";
import SideBar from "./Components/SideBar/SideBar";
import Header from "./Components/NavBar/Header";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Feed from "./Components/Feed/Feed";
import styles from "./App.module.scss";
import SignIn from "./Auth/SignIn";

function App() {
  const user = useSelector(selectUser);
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
