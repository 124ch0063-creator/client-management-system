import React from "react";
import { Link, useLocation } from "react-router-dom";

/**
 * SideBar Component
 * Navigation sidebar with active state indicators
 * 
 * @param {boolean} isLoggedIn - User login status
 * @param {function} onLogout - Logout handler
 */
function SideBar({ isLoggedIn, onLogout }) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  if (!isLoggedIn) return null;

  return (
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
            onClick={onLogout}
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
  );
}

export default SideBar;
