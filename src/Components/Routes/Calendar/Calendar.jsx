import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import "./Calendar.css";

export default function Calendar() {
  return (
    <>
      <div className="Main">
        <div className="CalendarContainer">
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </div>
      </div>
    </>
  );
}
