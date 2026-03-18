import React from "react";

/**
 * Table Component
 * Reusable data table component
 * 
 * @param {Array} headers - Column headers
 * @param {Array} rows - Table data rows
 * @param {Array} actions - Action buttons for each row
 */
function Table({ headers, rows, actions = null, emptyMessage = "No data found" }) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {headers && headers.map((header, idx) => (
              <th key={idx}>{header}</th>
            ))}
            {actions && <th>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {rows && rows.length > 0 ? (
            rows.map((row, rowIdx) => (
              <tr key={rowIdx}>
                {typeof row === "object" ? (
                  <>
                    {Object.values(row).map((cell, cellIdx) => (
                      <td key={cellIdx}>{cell}</td>
                    ))}
                    {actions && (
                      <td>
                        <div className="action-buttons">
                          {actions(row)}
                        </div>
                      </td>
                    )}
                  </>
                ) : (
                  <td>{row}</td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={headers?.length || 1} style={{ textAlign: "center", padding: "30px", color: "#7f8c8d" }}>
                {emptyMessage}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
