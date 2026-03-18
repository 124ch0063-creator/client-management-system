# Service Tickets Page Wireframe

## Overview
The Service Tickets page enables users to manage customer support tickets with full CRUD operations, status tracking, priority levels, and advanced filtering capabilities.

## Layout Structure

```
┌────────────────────────────────────────────────────────────────────┐
│                      SERVICE TICKETS                                │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│  [Search Box: "Search tickets..."] [Status: All ▼] [+ New Ticket]   │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│  TICKETS LIST                                                        │
│                                                                      │
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │ ID | Title | Client | Priority | Status | Date | Actions    │   │
│  │──────────────────────────────────────────────────────────────│   │
│  │#1001│Login Issue │Tech Corp │ HIGH │ OPEN │ Mar 18│[E][D]   │   │
│  │    │           │          │      │      │       │           │   │
│  │────────────────────────────────────────────────────────────│   │
│  │#1002│Bug in Dashboard │Digital │MEDIUM│IN PROGRESS│Mar 17│[E][D]│
│  │    │           │          │      │      │       │           │   │
│  │────────────────────────────────────────────────────────────│   │
│  │#1003│Feature Request │Cloud│ LOW │ OPEN │ Mar 16│[E][D]    │   │
│  │    │           │          │      │      │       │           │   │
│  │────────────────────────────────────────────────────────────│   │
│  │#1004│Data Export │Data Analytics │ HIGH │IN PROGRESS│Mar 15│[E][D]│
│  │    │           │          │      │      │       │           │   │
│  │────────────────────────────────────────────────────────────│   │
│  │#1005│Performance │Mobile First │MEDIUM│ CLOSED │ Mar 10│[E][D]│
│  │    │Optimization│          │      │      │       │           │   │
│  └──────────────────────────────────────────────────────────────┘   │
│                                                                      │
├──────────────────────────────────────────────────────────────────────┤
│  TICKET STATISTICS                                                   │
│                                                                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │ Total    │  │ Open     │  │In Progress│  │ Closed   │            │
│  │    5     │  │    3     │  │    2     │  │    0     │            │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘            │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│ MODAL: Create/Edit Ticket (Appears when form is opened)         │
│                                                                  │
│  [X] Create New Ticket                                          │
│  ──────────────────────────────                                 │
│                                                                  │
│  Ticket Title:     [_________________]                          │
│  Client:           [_________________]                          │
│  Description:      [_________________________]                  │
│                    [_________________________]                  │
│                    [_________________________]                  │
│                                                                  │
│  Priority: [Medium ▼]  Status: [Open ▼]                        │
│                                                                  │
│                     [Cancel] [Create Ticket]                    │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

## Components Description

### 1. Top Control Bar
- **Search Box:**
  - Placeholder: "Search tickets by title or client..."
  - Real-time search/filter
  - Width: 50% on desktop

- **Status Filter Dropdown:**
  - Options: All, Open, In Progress, Closed
  - Default: All
  - Color-coded options

- **New Ticket Button:**
  - Text: "+ New Ticket"
  - Color: Green (#2ecc71)
  - Opens modal form

### 2. Tickets Table
- **Columns:**
  1. Ticket ID (e.g., #1001, bold blue)
  2. Title (Main issue title)
  3. Client (Client company name)
  4. Priority (Color badge: Red=High, Orange=Medium, Green=Low)
  5. Status (Color badge: Red=Open, Orange=In Progress, Green=Closed)
  6. Created Date (Mar 18, 2026 format)
  7. Actions (Edit & Delete buttons)

- **Table Header:** Dark blue (#34495e), white text, bold
- **Rows:** White background with hover highlight
- **Priority Color Coding:**
  - High: Red (#e74c3c)
  - Medium: Orange (#f39c12)
  - Low: Green (#2ecc71)

- **Status Color Coding:**
  - Open: Red (#e74c3c)
  - In Progress: Orange (#f39c12)
  - Closed: Green (#2ecc71)

### 3. Create/Edit Ticket Modal
- **Header:**
  - Title: "Create New Ticket" or "Edit Ticket"
  - Close button (X)

- **Form Fields:**
  - Ticket Title (required, text input)
  - Client (required, text/dropdown input)
  - Description (required, textarea, 3-4 lines)
  - Priority (dropdown: Low, Medium, High)
  - Status (dropdown: Open, In Progress, Closed)

- **Actions:**
  - Cancel Button (Gray)
  - Create/Update Button (Blue)

### 4. Ticket Statistics Section
- **4 Cards** showing ticket counts
- **Metrics:**
  - Total: Sum of all tickets
  - Open: Count of Open tickets
  - In Progress: Count of In Progress tickets
  - Closed: Count of Closed tickets
- **Design:** Simple cards with large numbers
- **Colors:** Match status badge colors

### 5. Action Buttons
- **Edit Button:** Blue, small, inline
- **Delete Button:** Red, small, inline with confirmation

## Color Scheme
- **Primary:** #3498db (Blue)
- **Success (Low Priority/Closed):** #2ecc71 (Green)
- **Warning (Medium Priority/In Progress):** #f39c12 (Orange)
- **Danger (High Priority/Open):** #e74c3c (Red)
- **Table Header:** #34495e (Dark Blue)
- **Text:** #2c3e50 (Dark Gray)
- **Background:** #f5f7fa (Light Gray)
- **Card Background:** White

## Typography
- **Page Title:** 32px, Bold, #2c3e50
- **Table Headers:** 14px, Bold, White on #34495e
- **Table Cells:** 14px, Regular
- **ID Column:** Bold, Blue (#3498db)
- **Button Text:** 14px, Bold
- **Form Labels:** 14px, Bold
- **Status/Priority Badges:** 12px, Bold, White text

## Responsive Behavior
- **Desktop (>1200px):** Full table view, all columns visible
- **Tablet (768px-1200px):** Scrollable table, compact columns
- **Mobile (<768px):** Collapsible rows, vertical form

## Interactive Elements
- **Search:** Real-time filtering of tickets
- **Filter Dropdown:** Filter by status
- **Edit Button:** Opens edit modal with pre-filled data
- **Delete Button:** Shows confirmation dialog
- **Priority/Status Badges:** Visual indicators
- **Hover Effects:** Row highlight, button transform

## Form Validation
- All fields required (marked with *)
- Title: Min 5 characters
- Description: Min 10 characters
- Client: Must exist or be created
- Priority & Status: Must be selected

## Sample Data
- Ticket IDs: 1001, 1002, 1003, etc.
- Titles: Login Issue, Bug Fixes, Feature Requests, etc.
- Clients: Tech Corp, Digital Solutions, Cloud Services, etc.
- Priorities: High, Medium, Low
- Status: Open, In Progress, Closed
- Dates: Recent dates (within last month)

## Additional Features
- **Bulk Actions:** Option to select multiple tickets
- **Export:** Export tickets to CSV (future enhancement)
- **Assign To:** Assign tickets to team members (optimization)
- **Comments:** Add/view ticket comments (future)
- **Attachments:** Upload files to tickets (future)

---
*Designed for: Client Management System*
*Version: 1.0*
*Status: Implementation Complete ✅*