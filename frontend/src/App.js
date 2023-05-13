import "./App.css";
import ProjectsPage from "./projects/ProjectsPage";
import ProjectPage from "./projects/ProjectPage";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import HomePage from "./home/HomePage";
import Engine from "./projects/Engine";
import Wing from "./projects/Wing";
import LandingGear from "./projects/LandingGear";
import Avionics from "./projects/Avionics";
import Fuselage from "./projects/Fuselage";

function App() {
  return (
    <Router>
      <header className="sticky">
        <div className="logo">
          Components Based on CO2 Footprints
        </div>
        {/* <NavLink to="/" className="button rounded">
          <span className="icon-home"></span>
          Home
        </NavLink> */}
        <NavLink to="/projects" className="button rounded">
          All Components
        </NavLink>
        <NavLink to="/engine" className="button rounded">
          Engines
        </NavLink>
        <NavLink to="/wing" className="button rounded">
          Wing
        </NavLink>
        <NavLink to="/landing-gear" className="button rounded">
          Landing Gear
        </NavLink>
        <NavLink to="/avionics" className="button rounded">
          Avionics
        </NavLink>
        <NavLink to="/fuselage" className="button rounded">
          Fuselage
        </NavLink>
        
        {/* <div class="navbar">
          <NavLink to="/projects" className="button rounded">
            Components
          </NavLink>
          <div class="dropdown" style={{zIndex: "1"}}>
            <button class="dropbtn">
              Based on CO2 Footprint Components
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <NavLink to="/co2FootprintComponents" className="button rounded">
                Engines
              </NavLink>
            </div>
          </div>
        </div> */}
      </header>
      <div className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/engine" element={<Engine />} />
          <Route path="/wing" element={<Wing />} />
          <Route path="/landing-gear" element={<LandingGear />} />
          <Route path="/avionics" element={<Avionics />} />
          <Route path="/fuselage" element={<Fuselage />} />
          
          <Route path="/projects/:id" element={<ProjectPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
