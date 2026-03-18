# Client Management Page Wireframe

## Overview
The Client Management page allows users to view, search, create, edit, and delete client records. It provides a comprehensive client database interface with CRUD operations.

## Layout Structure

```
┌────────────────────────────────────────────────────────────────────┐
│                      CLIENT MANAGEMENT                              │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│  [Search Box: "Search clients..."] [+ Add New Client Button]        │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│  CLIENTS LIST                                                        │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ Name | Email | Phone | City | Status | Actions              │   │
│  │───────────────────────────────────────────────────────────── │   │
│  │ Tech Corp | contact@techcorp.com | +1-555-1234 | NY | Active │   │
│  │           [Edit] [Delete]                                    │   │
│  │───────────────────────────────────────────────────────────── │   │
│  │ Digital Solutions | info@digsol.com | +1-555-2345 | SF | Active │ │
│  │           [Edit] [Delete]                                    │   │
│  │───────────────────────────────────────────────────────────── │   │
│  │ Cloud Services | hello@cloud.com | +1-555-3456 | Seattle | Active │
│  │           [Edit] [Delete]                                    │   │
│  │───────────────────────────────────────────────────────────── │   │
│  │ Data Analytics | support@data.com | +1-555-4567 | Boston | Inactive │
│  │           [Edit] [Delete]                                    │   │
│  │───────────────────────────────────────────────────────────── │   │
│  │ Mobile First | team@mobile.com | +1-555-5678 | Austin | Active   │
│  │           [Edit] [Delete]                                    │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  Total Clients: 5                                                    │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ MODAL: Add/Edit Client (Appears when form is opened)           │
│                                                                  │
│  [X] Add New Client                                             │
│  ──────────────────────────────────                             │
│                                                                  │
│  Client Name:      [_________________]                          │
│  Email Address:    [_________________]                          │
│  Phone Number:     [_________________]                          │
│  City:             [_________________]                          │
│  Status:           [Active ▼]                                   │
│                                                                  │
│                        [Cancel] [Add Client]                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Components Description

### 1. Top Action Bar
- **Search Box:** 
  - Placeholder: "Search clients by name or email..."
  - Real-time filtering
  - Width: 60% on desktop
- **Add Button:**
  - Text: "+ Add New Client"
  - Color: Green (#2ecc71)
  - Opens modal form

### 2. Clients Table
- **Columns:**
  1. Name (Bold, #2c3e50)
  2. Email (Regular text)
  3. Phone (Regular text)
  4. City (Regular text)
  5. Status (Color badge: Green=Active, Red=Inactive)
  6. Actions (Edit & Delete buttons)

- **Table Header:** Dark blue (#34495e) background, white text
- **Rows:** Alternating white background, hover effect
- **Pagination:** Not in wireframe, but implemented as needed

### 3. Add/Edit Client Modal
- **Header:** 
  - Title: "Add New Client" or "Edit Client"
  - Close button (X)
  
- **Form Fields:**
  - Client Name (required)
  - Email Address (required, email format)
  - Phone Number (required)
  - City (required)
  - Status (dropdown: Active/Inactive)

- **Actions:**
  - Cancel Button (Gray)
  - Submit Button (Blue)

### 4. Action Buttons
- **Edit Button:** Blue, small size, opens edit modal
- **Delete Button:** Red, small size, with confirmation dialog

### 5. Summary Bar
- **Shows:** "Total Clients: X"
- **Location:** Below table

## Color Scheme
- **Primary:** #3498db (Blue)
- **Success:** #2ecc71 (Green)
- **Danger:** #e74c3c (Red)
- **Active Status:** Green badge
- **Inactive Status:** Red badge
- **Table Header:** #34495e (Dark Blue)
- **Text:** #2c3e50 (Dark Gray)
- **Background:** #f5f7fa (Light Gray)

## Typography
- **Page Title:** 32px, Bold
- **Table Headers:** 14px, Bold, White
- **Table Cells:** 14px, Regular
- **Button Text:** 14px, Bold
- **Form Labels:** 14px, Bold

## Responsive Behavior
- **Desktop (>1200px):** Full table view, side-by-side layout
- **Tablet (768px-1200px):** Scrollable table, stacked form
- **Mobile (<768px):** Single column table, mobile-optimized form

## Interactive Elements
- **Search:** Real-time filtering as user types
- **Edit Button:** Opens modal with pre-filled data
- **Delete Button:** Shows confirmation dialog
- **Modal:** Overlay with form validation
- **Status Dropdown:** Changes Active/Inactive status
- **Hover Effects:** Row highlight, button transform

## Form Validation
- All fields required
- Email format validation
- Phone number format validation
- Status must be selected

## Sample Data Fields
- Client Name: Company names
- Email: Valid email format
- Phone: +1 (555) xxx-xxxx format
- City: Major US cities

---
*Designed for: Client Management System*
*Version: 1.0*
*Status: Implementation Complete ✅*