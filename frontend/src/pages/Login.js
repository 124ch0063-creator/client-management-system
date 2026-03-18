import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!email || !password) {
      setError("Please fill in all fields!");
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address!");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long!");
      return;
    }

    // Simple authentication (for demo purposes)
    if (email === "admin@cms.com" && password === "admin123") {
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setError("Invalid email or password! Try: admin@cms.com / admin123");
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

          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>

        <div style={{ marginTop: "30px", padding: "20px", background: "#f0f0f0", borderRadius: "5px", fontSize: "14px", color: "#666" }}>
          <p style={{ marginBottom: "10px", fontWeight: "600" }}>Demo Credentials:</p>
          <p>Email: <code style={{ background: "white", padding: "2px 6px", borderRadius: "3px" }}>admin@cms.com</code></p>
          <p>Password: <code style={{ background: "white", padding: "2px 6px", borderRadius: "3px" }}>admin123</code></p>
        </div>
      </div>
    </div>
  );
}

export default Login;