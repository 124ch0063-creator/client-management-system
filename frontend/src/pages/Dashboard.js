import { useState } from "react";

function Dashboard() {
  const [stats] = useState({
    totalClients: 25,
    openTickets: 10,
    closedTickets: 15,
    activeUsers: 8
  });

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>

      {/* Statistics Cards */}
      <div className="stats-container">
        <div className="stat-card blue">
          <h3>Total Clients</h3>
          <p>{stats.totalClients}</p>
        </div>

        <div className="stat-card orange">
          <h3>Open Tickets</h3>
          <p>{stats.openTickets}</p>
        </div>

        <div className="stat-card green">
          <h3>Closed Tickets</h3>
          <p>{stats.closedTickets}</p>
        </div>

        <div className="stat-card red">
          <h3>Active Users</h3>
          <p>{stats.activeUsers}</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div style={{ marginTop: "40px" }}>
        <h3 style={{ marginBottom: "20px", fontSize: "20px", color: "#2c3e50" }}>Recent Activity</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Activity</th>
                <th>User</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Created new client "Tech Corp"</td>
                <td>John Doe</td>
                <td>Mar 19, 2026</td>
                <td><span className="status-badge status-closed">Completed</span></td>
              </tr>
              <tr>
                <td>Opened ticket #1024</td>
                <td>Jane Smith</td>
                <td>Mar 19, 2026</td>
                <td><span className="status-badge status-in-progress">In Progress</span></td>
              </tr>
              <tr>
                <td>Closed ticket #1020</td>
                <td>Admin User</td>
                <td>Mar 18, 2026</td>
                <td><span className="status-badge status-closed">Completed</span></td>
              </tr>
              <tr>
                <td>Updated client information</td>
                <td>John Doe</td>
                <td>Mar 18, 2026</td>
                <td><span className="status-badge status-closed">Completed</span></td>
              </tr>
              <tr>
                <td>Created new service ticket</td>
                <td>Sarah Wilson</td>
                <td>Mar 17, 2026</td>
                <td><span className="status-badge status-open">Pending</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Stats */}
      <div style={{ marginTop: "40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
          <h4 style={{ color: "#7f8c8d", marginBottom: "10px" }}>Client Satisfaction</h4>
          <p style={{ fontSize: "28px", fontWeight: "700", color: "#2ecc71" }}>92%</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
          <h4 style={{ color: "#7f8c8d", marginBottom: "10px" }}>Response Time</h4>
          <p style={{ fontSize: "28px", fontWeight: "700", color: "#3498db" }}>2.4 hrs</p>
        </div>
        <div style={{ background: "white", padding: "20px", borderRadius: "10px", boxShadow: "0 2px 10px rgba(0,0,0,0.08)" }}>
          <h4 style={{ color: "#7f8c8d", marginBottom: "10px" }}>Resolution Rate</h4>
          <p style={{ fontSize: "28px", fontWeight: "700", color: "#f39c12" }}>87%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;