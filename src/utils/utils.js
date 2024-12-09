// src/utils.js

// Colors
export const colors = {
    Blueprimary: "#005288",
    Orangesprimary: "#e74c3c",
    success: "#28a745",
    danger: "#dc3545",
    warning: "#ffc107",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
    white:"#FFF"
  };
  
  // Responsive Font Sizes
  export const rfs = (size) => {
    const baseSize = 16; // Base font size in pixels
    const scaleFactor = 1.2; // Scale factor for responsiveness
    return `${baseSize * size * scaleFactor}px`;
  };
  
  // Multiple Resources
  export const resources = {
    images: {
      GS1logo: "../assets/gs1-logo.jpg",
      background: "/assets/background.jpg",
    },
    endpoints: {
      apiBaseUrl: "https://api.example.com",
      login: "/auth/login",
      register: "/auth/register",
    },
    messages: {
      welcome: "Welcome to our application!",
      logout: "You have been logged out.",
      error: "Something went wrong. Please try again.",
    },
  };
  