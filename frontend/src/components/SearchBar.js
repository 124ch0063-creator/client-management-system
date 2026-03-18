import React from "react";

/**
 * SearchBar Component
 * Reusable search input component
 * 
 * @param {string} placeholder - Placeholder text
 * @param {string} value - Search value
 * @param {function} onChange - Change handler
 * @param {function} onSearch - Optional search submit handler
 */
function SearchBar({ placeholder = "Search...", value, onChange, onSearch = null }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={(e) => {
        if (e.key === "Enter" && onSearch) {
          onSearch(value);
        }
      }}
      style={{
        flex: 1,
        minWidth: "250px",
        padding: "12px",
        border: "1px solid #bdc3c7",
        borderRadius: "5px",
        fontSize: "14px"
      }}
    />
  );
}

export default SearchBar;
