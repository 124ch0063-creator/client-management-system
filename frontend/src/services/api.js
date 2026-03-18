/**
 * API Service
 * Handles all API calls to the backend
 * Ready for Week 3 backend integration
 */

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

/**
 * Generic API request handler
 * @param {string} endpoint - API endpoint path
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {Object} data - Request body data
 * @param {string} token - Authentication token
 */
async function apiCall(endpoint, method = "GET", data = null, token = null) {
  const headers = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const config = {
    method,
    headers,
  };

  if (data) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("API Call Error:", error);
    throw error;
  }
}

// ============= AUTHENTICATION SERVICES =============

export const authService = {
  login: async (email, password) => {
    return apiCall("/auth/login", "POST", { email, password });
  },

  logout: async () => {
    // Clear local storage
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  },

  register: async (userData) => {
    return apiCall("/auth/register", "POST", userData);
  },

  validateToken: async (token) => {
    return apiCall("/auth/validate", "POST", { token }, token);
  }
};

// ============= CLIENT SERVICES =============

export const clientService = {
  getAll: async (token) => {
    return apiCall("/clients", "GET", null, token);
  },

  getById: async (id, token) => {
    return apiCall(`/clients/${id}`, "GET", null, token);
  },

  create: async (clientData, token) => {
    return apiCall("/clients", "POST", clientData, token);
  },

  update: async (id, clientData, token) => {
    return apiCall(`/clients/${id}`, "PUT", clientData, token);
  },

  delete: async (id, token) => {
    return apiCall(`/clients/${id}`, "DELETE", null, token);
  },

  search: async (query, token) => {
    return apiCall(`/clients/search?q=${query}`, "GET", null, token);
  }
};

// ============= TICKET SERVICES =============

export const ticketService = {
  getAll: async (token) => {
    return apiCall("/tickets", "GET", null, token);
  },

  getById: async (id, token) => {
    return apiCall(`/tickets/${id}`, "GET", null, token);
  },

  create: async (ticketData, token) => {
    return apiCall("/tickets", "POST", ticketData, token);
  },

  update: async (id, ticketData, token) => {
    return apiCall(`/tickets/${id}`, "PUT", ticketData, token);
  },

  delete: async (id, token) => {
    return apiCall(`/tickets/${id}`, "DELETE", null, token);
  },

  search: async (query, token) => {
    return apiCall(`/tickets/search?q=${query}`, "GET", null, token);
  },

  getByStatus: async (status, token) => {
    return apiCall(`/tickets/status/${status}`, "GET", null, token);
  }
};

// ============= DASHBOARD SERVICES =============

export const dashboardService = {
  getStatistics: async (token) => {
    return apiCall("/dashboard/stats", "GET", null, token);
  },

  getRecentActivity: async (token) => {
    return apiCall("/dashboard/activity", "GET", null, token);
  },

  getMetrics: async (token) => {
    return apiCall("/dashboard/metrics", "GET", null, token);
  }
};

export default {
  authService,
  clientService,
  ticketService,
  dashboardService
};
