import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        
        {/* Sidebar */}
        <div style={{
          width: "200px",
          height: "100vh",
          background: "#2c3e50",
          color: "white",
          padding: "20px"
        }}>
          <h3>CMS</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><Link to="/dashboard" style={{ color: "white" }}>Dashboard</Link></li>
            <li><Link to="/clients" style={{ color: "white" }}>Clients</Link></li>
            <li><Link to="/tickets" style={{ color: "white" }}>Tickets</Link></li>
          </ul>
        </div>

        {/* Main Content */}
        <div style={{ padding: "20px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/tickets" element={<Tickets />} />
          </Routes>
        </div>

      </div>
    </Router>
  );
}

export default App;