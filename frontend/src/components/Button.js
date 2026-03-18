import React from "react";

/**
 * Button Component
 * Reusable button with multiple variants
 * 
 * @param {string} variant - Button style: 'primary', 'secondary', 'success', 'danger', 'warning'
 * @param {string} size - Button size: 'small', 'medium', 'large'
 * @param {function} onClick - Click handler
 * @param {string} children - Button text
 * @param {boolean} disabled - Disabled state
 * @param {string} type - HTML button type: 'button', 'submit', 'reset'
 * @param {string} className - Additional CSS classes
 */
function Button({ 
  variant = "primary", 
  size = "medium", 
  onClick, 
  children, 
  disabled = false,
  type = "button",
  className = ""
}) {
  const variantClass = `btn btn-${variant}`;
  const sizeClass = size === "small" ? "btn-small" : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClass} ${sizeClass} ${className}`}
      style={{
        opacity: disabled ? 0.6 : 1,
        cursor: disabled ? "not-allowed" : "pointer"
      }}
    >
      {children}
    </button>
  );
}

export default Button;
