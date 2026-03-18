import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Clients from "./pages/Clients";
import Tickets from "./pages/Tickets";

function App() {
  return (
    <Router>
      <h1>Client Management System</h1>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/tickets" element={<Tickets />} />
      </Routes>
    </Router>
  );
}

export default App;