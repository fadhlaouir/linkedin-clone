import React from "react";
import styles from "./App.module.scss";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/NavBar/Header";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.app__body}>
        <SideBar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
