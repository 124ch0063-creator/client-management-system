function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        
        <div style={{ background: "#3498db", padding: "20px", color: "white" }}>
          <h3>Total Clients</h3>
          <p>25</p>
        </div>

        <div style={{ background: "#e67e22", padding: "20px", color: "white" }}>
          <h3>Open Tickets</h3>
          <p>10</p>
        </div>

        <div style={{ background: "#2ecc71", padding: "20px", color: "white" }}>
          <h3>Closed Tickets</h3>
          <p>15</p>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;