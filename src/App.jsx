import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Sidebar from "./Components/Sidebar/Sidebar";
import Error from "./Components/Routes/Error/Error";
import Discover from "./Components/Routes/Discover/Discover";
import Dashboard from "./Components/Routes/Dashboard/Dashboard";
import MyMeetups from "./Components/Routes/MyMeetups/MyMeetups";
import Calendar from "./Components/Routes/Calendar/Calendar";
import Messages from "./Components/Routes/Messages/Messages";
import MyNetwork from "./Components/Routes/MyNetwork/MyNetwork";
import Hosting from "./Components/Routes/MyMeetups/Hosting";
import PastEvents from "./Components/Routes/MyMeetups/PastEvents";
import SavedEvents from "./Components/Routes/MyMeetups/SavedEvents";
import UpcomingEvents from "./Components/Routes/MyMeetups/UpcomingEvents";
import LogIn from "./Components/Routes/User/LogIn";
import SignUp from "./Components/Routes/User/SignUp";
import MyConnections from "./Components/Routes/MyNetwork/MyConnections";
import ConnectionRequests from "./Components/Routes/MyNetwork/ConnectionRequests";
import FindConnections from "./Components/Routes/MyNetwork/FindConnections";
import EventProfile from "./Components/Routes/EventProfile/EventProfile";

function App() {
  return (
    <>
      <div className="PageWrapper">
        <div className="Page">
          <Sidebar />
          <Routes>
            <Route path="/Gather/Discover" element={<Discover />}></Route>
            <Route path="/Gather/Dashboard" element={<Dashboard />}></Route>
            <Route path="/Gather/MyMeetups" element={<MyMeetups />}></Route>
            <Route path="/Gather/Calendar" element={<Calendar />}></Route>
            <Route path="/Gather/Messages" element={<Messages />}></Route>
            <Route
              path="/Gather/MyNetwork/ConnectionRequests"
              element={<ConnectionRequests />}
            ></Route>
            <Route
              path="/Gather/MyNetwork/MyConnections"
              element={<MyConnections />}
            ></Route>
            <Route
              path="/Gather/MyNetwork/FindConnections"
              element={<FindConnections />}
            ></Route>
            <Route path="/Gather/SignUp" element={<SignUp />}></Route>
            <Route path="/Gather/LogIn" element={<LogIn />}></Route>
            <Route
              path="/Gather/MyNetwork/MyConnections"
              element={<MyConnections />}
            ></Route>
            <Route
              path="/Gather/MyMeetups/Hosting"
              element={<Hosting />}
            ></Route>
            <Route
              path="/Gather/MyMeetups/PastEvents"
              element={<PastEvents />}
            ></Route>
            <Route
              path="/Gather/MyMeetups/SavedEvents"
              element={<SavedEvents />}
            ></Route>
            <Route
              path="/Gather/MyMeetups/UpcomingEvents"
              element={<UpcomingEvents />}
            ></Route>
            <Route path="/Gather/EventProfile/:eventId" element={<EventProfile />}></Route>
            <Route path="/" element={<Discover />} />
            <Route path="/Gather" element={<Discover />}></Route>
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
