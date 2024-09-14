import Header from "./components/Header";
import Chart from "./components/Chart";
import JobTable from "./components/JobTable";
import SignalTable from "./components/SignalTable";

function Main() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <Header />
      <Chart />
      <JobTable />
      <SignalTable />
    </div>
  );
}

export default Main;
