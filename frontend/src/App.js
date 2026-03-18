import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import Tickets from "./pages/Tickets";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  if (!isLoggedIn && location.pathname !== "/") {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  if (!isLoggedIn) {
    return <Login setIsLoggedIn={setIsLoggedIn} />;
  }

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>CMS</h3>
        <ul>
          <li>
            <Link 
              to="/dashboard" 
              className={isActive("/dashboard") ? "active" : ""}
            >
              📊 Dashboard
            </Link>
          </li>
          <li>
            <Link 
              to="/clients" 
              className={isActive("/clients") ? "active" : ""}
            >
              👥 Clients
            </Link>
          </li>
          <li>
            <Link 
              to="/tickets" 
              className={isActive("/tickets") ? "active" : ""}
            >
              🎫 Tickets
            </Link>
          </li>
          <li style={{ marginTop: "40px", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "20px" }}>
            <button 
              onClick={() => setIsLoggedIn(false)}
              style={{
                background: "none",
                border: "none",
                color: "white",
                cursor: "pointer",
                padding: "12px 15px",
                width: "100%",
                textAlign: "left",
                borderRadius: "5px",
                fontSize: "16px",
                transition: "all 0.3s ease"
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = "rgba(255,255,255,0.1)"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            >
              🚪 Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/tickets" element={<Tickets />} />
        </Routes>
      </div>
    </div>
  );
}

export default function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}