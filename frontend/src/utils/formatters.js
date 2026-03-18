/**
 * String and Data Formatting Utilities
 * Format data for display
 */

export const formatDate = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
};

export const formatDateTime = (date) => {
  if (!date) return '';
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const formatPhoneNumber = (phone) => {
  if (!phone) return '';
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length !== 10 && cleaned.length !== 11) return phone;
  
  const areaCode = cleaned.slice(-10, -7);
  const exchange = cleaned.slice(-7, -4);
  const subscriber = cleaned.slice(-4);
  
  return `+1 (${areaCode}) ${exchange}-${subscriber}`;
};

export const capitalizeWords = (str) => {
  if (!str) return '';
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

export const truncateText = (text, length = 50) => {
  if (!text) return '';
  return text.length > length ? text.substring(0, length) + '...' : text;
};

export const getPriorityColor = (priority) => {
  const colorMap = {
    high: '#e74c3c',
    medium: '#f39c12',
    low: '#2ecc71'
  };
  return colorMap[priority?.toLowerCase()] || '#95a5a6';
};

export default {
  formatDate,
  formatDateTime,
  formatPhoneNumber,
  capitalizeWords,
  truncateText,
  getPriorityColor
};
