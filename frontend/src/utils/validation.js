/**
 * Validation Utilities
 * Common validation functions
 */

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};

export const validatePhoneNumber = (phone) => {
  const phoneRegex = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

export const validateClientForm = (client) => {
  const errors = {};

  if (!client.name || client.name.trim() === '') {
    errors.name = 'Client name is required';
  }

  if (!client.email || !validateEmail(client.email)) {
    errors.email = 'Valid email address is required';
  }

  if (!client.phone || !validatePhoneNumber(client.phone)) {
    errors.phone = 'Valid phone number is required';
  }

  if (!client.city || client.city.trim() === '') {
    errors.city = 'City is required';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateTicketForm = (ticket) => {
  const errors = {};

  if (!ticket.title || ticket.title.trim() === '') {
    errors.title = 'Ticket title is required';
  }

  if (ticket.title && ticket.title.trim().length < 5) {
    errors.title = 'Ticket title must be at least 5 characters';
  }

  if (!ticket.client || ticket.client.trim() === '') {
    errors.client = 'Client is required';
  }

  if (!ticket.description || ticket.description.trim() === '') {
    errors.description = 'Description is required';
  }

  if (ticket.description && ticket.description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export default {
  validateEmail,
  validatePassword,
  validatePhoneNumber,
  validateClientForm,
  validateTicketForm
};
