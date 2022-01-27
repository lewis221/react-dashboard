import "./styles/app.scss";
import ChartCard from "./components/ChartCard";

function App() {
  return (
    <div className="App">
      <main>
        <section className="glass">
          <div className="sidebar">
            <div>123</div>
            <div>456</div>
          </div>
          <div className="dashboard">
            <div className="card-group">
              <ChartCard />
              <ChartCard />
              <ChartCard />
            </div>
          </div>
        </section>
      </main>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
