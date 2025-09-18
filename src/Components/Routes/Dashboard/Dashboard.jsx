import Search from "../../Search/Search";
import Events from "../../Event/Events";
import "./Dashboard.css";

export default function Dashboard() {
  return (
    <>
      <div className="Main">
        <Search />
        <h1 className="Title">Dashboard</h1>
        <h2 className="SecondTitle">
          Here you can find all of our ongoing events
        </h2>
      </div>
    </>
  );
}
