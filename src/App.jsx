import { useState } from "react";
import "./App.css";
import { Routes, NavLink, Route } from "react-router";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Components/Main/Main";
import MeetUp from "./Components/Routes/MeetUp/MeetUp";
import Error from "./Components/Error/Error";

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
            <Route path="/MeetUp/MyMeetups"></Route>
            <Route path="/MeetUp/Calendar"></Route>
            <Route path="/MeetUp/Messages"></Route>
            <Route path="/MeetUp/MyNetwork"></Route>
            <Route path="/" element={<MeetUp />} />
            <Route path="/MeetUp" element={<MeetUp />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
