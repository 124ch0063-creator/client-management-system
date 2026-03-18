import React from "react";

/**
 * FormInput Component
 * Reusable form input with validation support
 * 
 * @param {string} label - Field label
 * @param {string} type - Input type (text, email, password, etc.)
 * @param {string} name - Input name attribute
 * @param {string} value - Input value
 * @param {function} onChange - Change handler
 * @param {string} placeholder - Placeholder text
 * @param {boolean} required - Whether field is required
 * @param {string} error - Error message to display
 */
function FormInput({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
  required = false,
  error = null,
  as = "input" // 'input', 'select', 'textarea'
}) {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span style={{ color: "#e74c3c" }}>*</span>}
        </label>
      )}
      
      {as === "input" && (
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            borderColor: error ? "#e74c3c" : undefined
          }}
        />
      )}

      {as === "textarea" && (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          style={{
            borderColor: error ? "#e74c3c" : undefined
          }}
        />
      )}

      {as === "select" && (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          style={{
            borderColor: error ? "#e74c3c" : undefined
          }}
        >
          {onChange.options?.map((opt, idx) => (
            <option key={idx} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      )}

      {error && (
        <span style={{ color: "#e74c3c", fontSize: "12px", marginTop: "5px", display: "block" }}>
          {error}
        </span>
      )}
    </div>
  );
}

export default FormInput;
