
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
        <div className="container">
          <div className="row">
            <div className="col-9">
              <h1 className="card-title">Tehran</h1>
              <h2 className="card-subtitle mb-2 text-muted" id="date">
                Sunday 1:19{" "}
              </h2>

              <h3 id="description"> ☁ Clear</h3>
            </div>
            <div className="col-3">
              <div className="feature">
                <div className="humidity"> humidity: 75% </div>
                <div className="wind"> wind: 4 km/h </div>
              </div>
            </div>
            <Weather />
          </div>
        </div>
     
  );
}

export default App;
