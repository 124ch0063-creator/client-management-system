import { useState } from "react";

function Tickets() {
  const [tickets, setTickets] = useState([
    { id: 1001, title: "Login Issue", client: "Tech Corp", description: "Unable to login to account", priority: "High", status: "Open", createdDate: "Mar 18, 2026" },
    { id: 1002, title: "Bug in Dashboard", client: "Digital Solutions Inc", description: "Dashboard widgets not loading", priority: "Medium", status: "In Progress", createdDate: "Mar 17, 2026" },
    { id: 1003, title: "Feature Request", client: "Cloud Services Ltd", description: "Request for dark mode", priority: "Low", status: "Open", createdDate: "Mar 16, 2026" },
    { id: 1004, title: "Data Export Issue", client: "Data Analytics Co", description: "Cannot export reports in CSV", priority: "High", status: "In Progress", createdDate: "Mar 15, 2026" },
    { id: 1005, title: "Performance Optimization", client: "Mobile First", description: "App loading too slow", priority: "Medium", status: "Closed", createdDate: "Mar 10, 2026" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    client: "",
    description: "",
    priority: "Medium",
    status: "Open"
  });
  const [filterStatus, setFilterStatus] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.title || !formData.client || !formData.description) {
      alert("Please fill in all required fields!");
      return;
    }

    if (editingId) {
      setTickets(tickets.map(t => 
        t.id === editingId ? { ...t, ...formData } : t
      ));
      setEditingId(null);
    } else {
      const newTicket = {
        id: Math.max(...tickets.map(t => t.id), 1000) + 1,
        ...formData,
        createdDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
      };
      setTickets([...tickets, newTicket]);
    }

    setFormData({ title: "", client: "", description: "", priority: "Medium", status: "Open" });
    setShowForm(false);
  };

  const handleEdit = (ticket) => {
    setFormData(ticket);
    setEditingId(ticket.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      setTickets(tickets.filter(t => t.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ title: "", client: "", description: "", priority: "Medium", status: "Open" });
  };

  let filteredTickets = tickets;
  
  if (filterStatus !== "All") {
    filteredTickets = filteredTickets.filter(t => t.status === filterStatus);
  }

  filteredTickets = filteredTickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ticket.client.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusBadgeClass = (status) => {
    if (status === "Open") return "status-open";
    if (status === "In Progress") return "status-in-progress";
    if (status === "Closed") return "status-closed";
  };

  const getPriorityColor = (priority) => {
    if (priority === "High") return "#e74c3c";
    if (priority === "Medium") return "#f39c12";
    if (priority === "Low") return "#2ecc71";
  };

  return (
    <div>
      <h2 className="page-title">Service Tickets</h2>

      <div style={{ marginBottom: "20px", display: "grid", gridTemplateColumns: "1fr 1fr auto", gap: "15px", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Search tickets by title or client..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #bdc3c7",
            borderRadius: "5px",
            fontSize: "14px"
          }}
        />
        
        <select 
          value={filterStatus} 
          onChange={(e) => setFilterStatus(e.target.value)}
          style={{
            padding: "12px",
            border: "1px solid #bdc3c7",
            borderRadius: "5px",
            fontSize: "14px"
          }}
        >
          <option value="All">All Status</option>
          <option value="Open">Open</option>
          <option value="In Progress">In Progress</option>
          <option value="Closed">Closed</option>
        </select>

        <button className="btn btn-success" onClick={() => { setShowForm(true); setEditingId(null); }}>
          + New Ticket
        </button>
      </div>

      {showForm && (
        <div className="modal show">
          <div className="modal-content">
            <div className="modal-header">
              {editingId ? "Edit Ticket" : "Create New Ticket"}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Ticket Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter ticket title"
                />
              </div>

              <div className="form-group">
                <label>Client *</label>
                <input
                  type="text"
                  name="client"
                  value={formData.client}
                  onChange={handleInputChange}
                  placeholder="Select or enter client name"
                />
              </div>

              <div className="form-group">
                <label>Description *</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter detailed description..."
                />
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "15px" }}>
                <div className="form-group">
                  <label>Priority</label>
                  <select name="priority" value={formData.priority} onChange={handleInputChange}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Status</label>
                  <select name="status" value={formData.status} onChange={handleInputChange}>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                  </select>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ width: "auto" }}>
                  {editingId ? "Update Ticket" : "Create Ticket"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Ticket ID</th>
              <th>Title</th>
              <th>Client</th>
              <th>Priority</th>
              <th>Status</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTickets.length > 0 ? (
              filteredTickets.map(ticket => (
                <tr key={ticket.id}>
                  <td style={{ fontWeight: "600", color: "#3498db" }}>#{ticket.id}</td>
                  <td>{ticket.title}</td>
                  <td>{ticket.client}</td>
                  <td>
                    <span style={{
                      padding: "5px 10px",
                      borderRadius: "3px",
                      color: "white",
                      fontSize: "12px",
                      fontWeight: "600",
                      backgroundColor: getPriorityColor(ticket.priority)
                    }}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusBadgeClass(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td style={{ fontSize: "14px", color: "#7f8c8d" }}>{ticket.createdDate}</td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn btn-small"
                        style={{ background: "#3498db", color: "white" }}
                        onClick={() => handleEdit(ticket)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-small btn-danger"
                        onClick={() => handleDelete(ticket.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center", padding: "30px", color: "#7f8c8d" }}>
                  No tickets found. Create one to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "20px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px" }}>
        <div style={{ background: "white", padding: "15px", borderRadius: "5px", textAlign: "center" }}>
          <p style={{ color: "#7f8c8d", fontSize: "12px" }}>Total Tickets</p>
          <p style={{ fontSize: "24px", fontWeight: "700", color: "#2c3e50" }}>{tickets.length}</p>
        </div>
        <div style={{ background: "white", padding: "15px", borderRadius: "5px", textAlign: "center" }}>
          <p style={{ color: "#7f8c8d", fontSize: "12px" }}>Open</p>
          <p style={{ fontSize: "24px", fontWeight: "700", color: "#e74c3c" }}>{tickets.filter(t => t.status === "Open").length}</p>
        </div>
        <div style={{ background: "white", padding: "15px", borderRadius: "5px", textAlign: "center" }}>
          <p style={{ color: "#7f8c8d", fontSize: "12px" }}>In Progress</p>
          <p style={{ fontSize: "24px", fontWeight: "700", color: "#f39c12" }}>{tickets.filter(t => t.status === "In Progress").length}</p>
        </div>
        <div style={{ background: "white", padding: "15px", borderRadius: "5px", textAlign: "center" }}>
          <p style={{ color: "#7f8c8d", fontSize: "12px" }}>Closed</p>
          <p style={{ fontSize: "24px", fontWeight: "700", color: "#2ecc71" }}>{tickets.filter(t => t.status === "Closed").length}</p>
        </div>
      </div>
    </div>
  );
}

export default Tickets;