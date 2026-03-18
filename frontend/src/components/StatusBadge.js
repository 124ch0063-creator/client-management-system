import React from "react";

/**
 * StatusBadge Component
 * Displays status with color coding
 * 
 * @param {string} status - Status value: 'active', 'inactive', 'open', 'closed', 'in-progress'
 * @param {string} text - Display text (defaults to status if not provided)
 */
function StatusBadge({ status, text = null }) {
  const statusMap = {
    active: { class: "status-closed", label: "Active" },
    inactive: { class: "status-open", label: "Inactive" },
    open: { class: "status-open", label: "Open" },
    closed: { class: "status-closed", label: "Closed" },
    "in-progress": { class: "status-in-progress", label: "In Progress" },
    pending: { class: "status-open", label: "Pending" },
    completed: { class: "status-closed", label: "Completed" }
  };

  const config = statusMap[status?.toLowerCase()] || statusMap.open;

  return (
    <span className={`status-badge ${config.class}`}>
      {text || config.label}
    </span>
  );
}

export default StatusBadge;
