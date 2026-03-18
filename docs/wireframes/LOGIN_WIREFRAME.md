# Login Page Wireframe

## Overview
The Login Page is the entry point to the Client Management System. It provides a secure authentication interface for users to access the application.

## Layout Structure

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│                    GRADIENT BACKGROUND                               │
│                   (Purple to Blue)                                   │
│                                                                       │
│                    ┌──────────────────────┐                         │
│                    │                      │                         │
│                    │  Welcome to CMS      │                         │
│                    │  Client Management   │                         │
│                    │      System          │                         │
│                    │                      │                         │
│                    │  Email:              │                         │
│                    │  [________________]  │                         │
│                    │                      │                         │
│                    │  Password:           │                         │
│                    │  [________________]  │                         │
│                    │                      │                         │
│                    │   [  LOGIN BUTTON  ] │                         │
│                    │                      │                         │
│                    │  Demo Credentials:   │                         │
│                    │  Email: admin@cms... │                         │
│                    │  Password: admin123  │                         │
│                    │                      │                         │
│                    └──────────────────────┘                         │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

## Components Description

### 1. Background
- **Type:** Gradient (135° angle)
- **Color 1:** #667eea (Purple)
- **Color 2:** #764ba2 (Deep Purple)
- **Coverage:** Full screen
- **Purpose:** Professional, modern appearance

### 2. Login Form Container
- **Position:** Center of screen (both horizontal & vertical)
- **Width:** 100% - 40px (responsive)
- **Max Width:** 500px
- **Background:** White
- **Padding:** 40px
- **Border Radius:** 10px
- **Box Shadow:** 0 5px 20px rgba(0, 0, 0, 0.1)

### 3. Header Section
- **Welcome Title:**
  - Text: "Welcome to CMS"
  - Font Size: 32px
  - Font Weight: Bold
  - Color: #2c3e50
  - Margin Bottom: 10px

- **Subtitle:**
  - Text: "Client Management System"
  - Font Size: 14px
  - Color: #7f8c8d
  - Margin Bottom: 40px
  - Text Align: Center

### 4. Form Fields

#### Email Address Field
- **Label:** "Email Address"
- **Font Size:** 14px
- **Font Weight:** 600
- **Input Type:** email
- **Placeholder:** "Enter your email"
- **Width:** 100%
- **Padding:** 12px
- **Border:** 1px solid #bdc3c7
- **Border Radius:** 5px
- **Focus State:**
  - Border Color: #3498db
  - Box Shadow: 0 0 0 3px rgba(52, 152, 219, 0.1)

#### Password Field
- **Label:** "Password"
- **Font Size:** 14px
- **Font Weight:** 600
- **Input Type:** password
- **Placeholder:** "Enter your password"
- **Width:** 100%
- **Padding:** 12px
- **Border:** 1px solid #bdc3c7
- **Border Radius:** 5px
- **Focus State:** Same as email field

### 5. Login Button
- **Text:** "LOGIN"
- **Width:** 100% (full form width)
- **Padding:** 12px
- **Background Color:** #3498db (Blue)
- **Text Color:** White
- **Font Size:** 16px
- **Font Weight:** 600
- **Border Radius:** 5px
- **Border:** None
- **Cursor:** Pointer
- **Hover State:**
  - Background: #2980b9 (Darker Blue)
  - Transform: translateY(-2px)
  - Box Shadow: 0 5px 15px rgba(52, 152, 219, 0.3)

### 6. Demo Credentials Box
- **Position:** Below login button
- **Background:** #f0f0f0 (Light gray)
- **Padding:** 20px
- **Border Radius:** 5px
- **Margin Top:** 30px
- **Font Size:** 14px
- **Color:** #666

- **Content:**
  - Title: "Demo Credentials:"
  - Font Weight: 600
  - Small line spacing
  - Email and password in code style boxes

### 7. Error Messages
- **Box Background:** #f8d7da (Light red)
- **Text Color:** #721c24 (Dark red)
- **Border:** 1px solid #f5c6cb
- **Padding:** 15px 20px
- **Border Radius:** 5px
- **Margin Bottom:** 20px
- **Animation:** Slide in from top (0.3s)

### 8. Custom Focus & Validation
- **Valid Input:** Green border (#2ecc71)
- **Invalid Input:** Red border (#e74c3c)
- **Disabled State:** Gray background, opacity 0.6

## Color Scheme
- **Primary Blue:** #3498db
- **Dark Blue:** #2980b9
- **Text Color:** #2c3e50
- **Secondary Text:** #7f8c8d
- **Border Color:** #bdc3c7
- **Background:** #f5f7fa
- **Error (Red):** #e74c3c
- **Success (Green):** #2ecc71
- **Form Background:** White
- **Gradient 1:** #667eea
- **Gradient 2:** #764ba2

## Typography
- **Main Title:** 32px, Bold, #2c3e50
- **Subtitle:** 14px, Regular, #7f8c8d
- **Labels:** 14px, Bold, #2c3e50
- **Input Text:** 14px, Regular, #333
- **Button Text:** 16px, Bold, White
- **Helper Text:** 14px, Regular, #666

## Responsive Behavior
- **Desktop (>600px):**
  - Form max-width: 500px
  - Centered on screen
  - Full padding

- **Tablet (600px-1000px):**
  - Form width: 90%
  - Centered with padding
  - Standard size

- **Mobile (<600px):**
  - Form width: 95%
  - Padding: 20px
  - Full screen height
  - Form scaled appropriately

## Interactive Elements
- **Email Input:**
  - Focus highlight
  - Validation on blur
  - Type-ahead for known emails (optional)

- **Password Input:**
  - Focus highlight
  - Character reveal toggle (optional)
  - Show/hide password icon

- **Login Button:**
  - Hover transform effect
  - Active state (pressed)
  - Loading state (spinner during auth)

- **Error Display:**
  - Animated slide in
  - Auto dismiss after 5 seconds (optional)
  - Click to dismiss

## Validation Rules
- **Email:**
  - Required
  - Must contain @ symbol
  - Valid email format

- **Password:**
  - Required
  - Minimum 6 characters
  - Real-time validation feedback

## Demo Account
- **Email:** admin@cms.com
- **Password:** admin123
- **Purpose:** Testing and demonstration
- **Displayed:** In credentials box below form

## Accessibility Features
- Labels associated with inputs
- ARIA labels for screen readers
- Keyboard navigation support (Tab key)
- Color contrast meets WCAG standards
- Clear focus indicators
- Semantic HTML structure

## Security Considerations
- Password input type (not visible)
- No credential caching
- HTTPS recommended for production
- No sensitive data in localStorage
- CSRF token validation (backend)

---
*Designed for: Client Management System*
*Version: 1.0*
*Status: Implementation Complete ✅*