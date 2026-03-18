import { useState } from "react";

function Clients() {
  const [clients, setClients] = useState([
    { id: 1, name: "Tech Corp", email: "contact@techcorp.com", phone: "+1 (555) 123-4567", city: "New York", status: "Active" },
    { id: 2, name: "Digital Solutions Inc", email: "info@digsol.com", phone: "+1 (555) 234-5678", city: "San Francisco", status: "Active" },
    { id: 3, name: "Cloud Services Ltd", email: "hello@cloudservices.com", phone: "+1 (555) 345-6789", city: "Seattle", status: "Active" },
    { id: 4, name: "Data Analytics Co", email: "support@dataanalytics.com", phone: "+1 (555) 456-7890", city: "Boston", status: "Inactive" },
    { id: 5, name: "Mobile First", email: "team@mobilefirst.com", phone: "+1 (555) 567-8901", city: "Austin", status: "Active" },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    status: "Active"
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.city) {
      alert("Please fill in all fields!");
      return;
    }

    if (editingId) {
      setClients(clients.map(c => 
        c.id === editingId ? { ...c, ...formData } : c
      ));
      setEditingId(null);
    } else {
      const newClient = {
        id: Math.max(...clients.map(c => c.id), 0) + 1,
        ...formData
      };
      setClients([...clients, newClient]);
    }

    setFormData({ name: "", email: "", phone: "", city: "", status: "Active" });
    setShowForm(false);
  };

  const handleEdit = (client) => {
    setFormData(client);
    setEditingId(client.id);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      setClients(clients.filter(c => c.id !== id));
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditingId(null);
    setFormData({ name: "", email: "", phone: "", city: "", status: "Active" });
  };

  const filteredClients = clients.filter(client =>
    client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h2 className="page-title">Client Management</h2>

      <div style={{ marginBottom: "20px", display: "flex", gap: "15px", flexWrap: "wrap", alignItems: "center" }}>
        <input
          type="text"
          placeholder="Search clients by name or email..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            minWidth: "250px",
            padding: "12px",
            border: "1px solid #bdc3c7",
            borderRadius: "5px",
            fontSize: "14px"
          }}
        />
        <button className="btn btn-success" onClick={() => { setShowForm(true); setEditingId(null); }}>
          + Add New Client
        </button>
      </div>

      {showForm && (
        <div className="modal show">
          <div className="modal-content">
            <div className="modal-header">
              {editingId ? "Edit Client" : "Add New Client"}
            </div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Client Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter client name"
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter email address"
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter phone number"
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Enter city"
                />
              </div>

              <div className="form-group">
                <label>Status</label>
                <select name="status" value={formData.status} onChange={handleInputChange}>
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary" style={{ width: "auto" }}>
                  {editingId ? "Update Client" : "Add Client"}
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
              <th>Client Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredClients.length > 0 ? (
              filteredClients.map(client => (
                <tr key={client.id}>
                  <td style={{ fontWeight: "600" }}>{client.name}</td>
                  <td>{client.email}</td>
                  <td>{client.phone}</td>
                  <td>{client.city}</td>
                  <td>
                    <span className={`status-badge ${client.status === "Active" ? "status-closed" : "status-open"}`}>
                      {client.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button
                        className="btn btn-small"
                        style={{ background: "#3498db", color: "white" }}
                        onClick={() => handleEdit(client)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-small btn-danger"
                        onClick={() => handleDelete(client.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center", padding: "30px", color: "#7f8c8d" }}>
                  No clients found. Create one to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={{ marginTop: "20px", padding: "15px", background: "white", borderRadius: "5px", textAlign: "center", color: "#7f8c8d" }}>
        Total Clients: <strong>{clients.length}</strong>
      </div>
    </div>
  );
}

export default Clients;