import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../services/authService";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    
    // Frontend validation
    if (!email || !password) {
      setError("Please fill in all fields!");
      setLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address!");
      setLoading(false);
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      setLoading(false);
      return;
    }

    // Call backend API
    const result = await loginUser(email, password);
    
    if (result.success) {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setError(result.message || "Login failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }}>
      <div className="form-container" style={{ maxWidth: "450px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ color: "#2c3e50", marginBottom: "10px", fontSize: "32px" }}>
            Welcome to CMS
          </h1>
          <p style={{ color: "#7f8c8d" }}>Client Management System</p>
        </div>

        {error && (
          <div className="message error" style={{ marginBottom: "20px" }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError("");
              }}
              placeholder="Enter your email"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError("");
              }}
              placeholder="Enter your password"
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ color: "#666" }}>
            Don't have an account?{" "}
            <Link
              to="/register"
              style={{ color: "#667eea", textDecoration: "none", fontWeight: "600" }}
            >
              Register here
            </Link>
          </p>
        </div>

        <div style={{ marginTop: "30px", padding: "20px", background: "#f0f0f0", borderRadius: "5px", fontSize: "14px", color: "#666" }}>
          <p style={{ marginBottom: "10px", fontWeight: "600" }}>ℹ️ Backend Required:</p>
          <p>Before logging in, ensure the backend server is running on:</p>
          <code style={{ background: "white", padding: "8px", borderRadius: "3px", display: "block", marginTop: "5px" }}>
            http://localhost:5000
          </code>
        </div>
      </div>
    </div>
  );
}

export default Login;