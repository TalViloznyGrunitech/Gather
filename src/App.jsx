import { useState } from "react";
import "./App.css";
import { Routes, NavLink, Route } from "react-router";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import MeetUp from "./Components/Routes/MeetUp/MeetUp";

function App() {
  return (
    <>
      <div className="PageWrapper">
        <div className="Page">
          <Sidebar />
          <Main />
          <Routes>
            <Route path="/MeetUp/Discover"></Route>
            <Route path="/MeetUp/Dashboard"></Route>
            <Route path="/" element={<MeetUp />} />
            <Route path="/MeetUp" element={<MeetUp />}></Route>
            <Route
              path="*"
              element={<h1>Error 404: Route does not exist!</h1>}
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
