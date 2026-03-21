import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../services/authService";

function Register({ setIsLoggedIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (pass) => {
    // Password must contain uppercase, lowercase, and numbers
    const hasUppercase = /[A-Z]/.test(pass);
    const hasLowercase = /[a-z]/.test(pass);
    const hasNumbers = /\d/.test(pass);
    return hasUppercase && hasLowercase && hasNumbers && pass.length >= 6;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    // Frontend validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields!");
      setLoading(false);
      return;
    }

    if (name.length < 2) {
      setError("Name must be at least 2 characters!");
      setLoading(false);
      return;
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email address!");
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must be at least 6 characters with uppercase, lowercase, and numbers!"
      );
      setLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    // Call backend API
    const result = await registerUser({ name, email, password, confirmPassword });

    if (result.success) {
      setSuccess("Registration successful! Redirecting to dashboard...");
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1500);
    } else {
      setError(result.message || "Registration failed. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div className="form-container" style={{ maxWidth: "500px" }}>
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h1 style={{ color: "#2c3e50", marginBottom: "10px", fontSize: "32px" }}>
            Create Account
          </h1>
          <p style={{ color: "#7f8c8d" }}>Join Client Management System</p>
        </div>

        {error && (
          <div className="message error" style={{ marginBottom: "20px" }}>
            {error}
          </div>
        )}

        {success && (
          <div
            className="message success"
            style={{
              marginBottom: "20px",
              background: "#d4edda",
              color: "#155724",
              padding: "12px",
              borderRadius: "4px",
            }}
          >
            {success}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError("");
              }}
              placeholder="Enter your full name"
            />
          </div>

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
              placeholder="At least 6 chars (uppercase, lowercase, numbers)"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                setError("");
              }}
              placeholder="Re-enter your password"
            />
          </div>

          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Creating Account..." : "Register"}
          </button>
        </form>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p style={{ color: "#666" }}>
            Already have an account?{" "}
            <Link
              to="/login"
              style={{ color: "#667eea", textDecoration: "none", fontWeight: "600" }}
            >
              Login here
            </Link>
          </p>
        </div>

        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            background: "#f0f0f0",
            borderRadius: "5px",
            fontSize: "13px",
            color: "#666",
          }}
        >
          <p style={{ marginBottom: "10px", fontWeight: "600" }}>
            ℹ️ Password Requirements:
          </p>
          <ul style={{ margin: "0", paddingLeft: "20px" }}>
            <li>Minimum 6 characters</li>
            <li>At least one uppercase letter (A-Z)</li>
            <li>At least one lowercase letter (a-z)</li>
            <li>At least one number (0-9)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Register;
