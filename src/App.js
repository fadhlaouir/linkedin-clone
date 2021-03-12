import React from "react";
import "./App.scss";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/NavBar/Header";
import SideBar from "./Components/SideBar/SideBar";

function App() {
  return (
    <div className="app">
      <Header />
      {/* App Body */}
      <div className="app__body">
        <SideBar />
        <Feed />
        {/* Widgets  */}{" "}
      </div>
    </div>
  );
}

export default App;
