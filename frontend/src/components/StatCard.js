import React from "react";

/**
 * StatCard Component
 * Displays a single statistic with title, value, and styling
 * 
 * @param {string} title - Card title
 * @param {number|string} value - Statistic value
 * @param {string} variant - Color variant: 'blue', 'orange', 'green', 'red'
 */
function StatCard({ title, value, variant = "blue" }) {
  const variantMap = {
    blue: "blue",
    orange: "orange",
    green: "green",
    red: "red"
  };

  return (
    <div className={`stat-card ${variantMap[variant]}`}>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  );
}

export default StatCard;
