# Frontend Documentation

## Project Structure

```
frontend/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Button.js        # Reusable button component
│   │   ├── Modal.js         # Modal dialog component
│   │   ├── SearchBar.js     # Search input component
│   │   ├── SideBar.js       # Navigation sidebar
│   │   ├── StatCard.js      # Statistics card component
│   │   ├── StatusBadge.js   # Status indicator badge
│   │   ├── Table.js         # Reusable table component
│   │   ├── FormInput.js     # Form input component
│   │   └── index.js         # Component exports
│   ├── pages/               # Main page components
│   │   ├── Login.js         # Login page
│   │   ├── Dashboard.js     # Dashboard page
│   │   ├── Clients.js       # Client management page
│   │   └── Tickets.js       # Ticket management page
│   ├── services/            # API and service handlers
│   │   ├── api.js           # REST API calls
│   │   ├── auth.js          # Authentication service
│   │   └── index.js         # Service exports
│   ├── utils/               # Utility functions
│   │   ├── validation.js    # Form validation utilities
│   │   ├── formatters.js    # Data formatting utilities
│   │   └── index.js         # Utility exports
│   ├── hooks/               # Custom React hooks (future)
│   ├── assets/              # Images, icons, fonts (future)
│   ├── App.js               # Main app component
│   ├── App.css              # Main styling
│   ├── index.css            # Global styles
│   ├── index.js             # React entry point
│   └── .env.example         # Environment variables template
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
cd frontend
npm install
```

2. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

3. Start development server:
```bash
npm start
```

The app will open at `http://localhost:3000`

## Available Scripts

### `npm start`
Runs the app in development mode.

### `npm test`
Launches the test runner.

### `npm run build`
Builds the app for production.

### `npm run eject`
Ejects configuration (irreversible).

## Components

### StatCard
Display statistics with color coding.
```jsx
<StatCard title="Total Clients" value={25} variant="blue" />
```

### Button
Reusable button with variants.
```jsx
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

### Modal
Dialog component for forms.
```jsx
<Modal isOpen={showModal} onClose={() => setShowModal(false)} title="Add Item">
  {/* Content */}
</Modal>
```

### StatusBadge
Status indicator with colors.
```jsx
<StatusBadge status="active" />
```

### Table
Reusable data table.
```jsx
<Table headers={["Name", "Email"]} rows={data} />
```

## Services

### API Service
Ready for backend integration.

```javascript
import { authService, clientService } from './services';

// Login
await authService.login(email, password);

// Get all clients
await clientService.getAll(token);
```

### Authentication
Token and user management.

```javascript
import { authTokenService } from './services';

authTokenService.setToken(token);
authTokenService.getToken();
authTokenService.clearAuth();
```

## Utilities

### Validation
Form validation functions.

```javascript
import { validateEmail, validateClientForm } from './utils';

validateEmail('test@example.com');
validateClientForm(clientData);
```

### Formatters
Data formatting functions.

```javascript
import { formatDate, formatPhoneNumber } from './utils';

formatDate(new Date());
formatPhoneNumber('5551234567');
```

## Features

### Authentication
- ✅ Login with email/password
- ✅ Demo credentials support
- ✅ Logout functionality
- ✅ Token management (ready for backend)

### Client Management
- ✅ View all clients
- ✅ Search clients
- ✅ Create new client
- ✅ Edit existing client
- ✅ Delete client
- ✅ Status tracking

### Ticket Management
- ✅ View all tickets
- ✅ Search tickets
- ✅ Filter by status
- ✅ Create new ticket
- ✅ Edit ticket
- ✅ Delete ticket
- ✅ Priority levels

### Dashboard
- ✅ Statistics cards
- ✅ Recent activity
- ✅ Performance metrics
- ✅ Quick stats

## Styling

### Color Palette
- Primary Blue: `#3498db`
- Dark Blue: `#2c3e50`
- Success Green: `#2ecc71`
- Warning Orange: `#f39c12`
- Danger Red: `#e74c3c`
- Gray: `#7f8c8d`

### Responsive Breakpoints
- Desktop: >1200px
- Tablet: 768px - 1200px
- Mobile: <768px

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance
- Code splitting enabled
- Service worker ready (PWA capable)
- Optimized builds
- Lazy loading ready

## Development Tips

1. **Use Components**: Always use reusable components from `/components`
2. **Use Services**: Import services from `/services` for API calls
3. **Use Utils**: Use utility functions from `/utils` for common tasks
4. **Naming Conventions**: Use camelCase for variables, PascalCase for components
5. **Comments**: Add JSDoc comments for complex functions
6. **State Management**: Use React hooks (useState, useEffect)

## Common Tasks

### Adding a New Page
1. Create file in `/pages/`
2. Add route in `App.js`
3. Update SideBar navigation

### Creating a Reusable Component
1. Create file in `/components/`
2. Add to `components/index.js`
3. Document with JSDoc comments

### Adding API Integration
1. Add endpoint in `/services/api.js`
2. Use `apiCall()` function
3. Handle errors properly

### Adding Validation
1. Create validator in `/utils/validation.js`
2. Use in form components
3. Display error messages

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Static Host
- AWS S3
- Netlify
- Vercel
- GitHub Pages

## Troubleshooting

### Port 3000 Already in Use
```bash
# Windows
netstat -ano | findstr :3000

# macOS/Linux
lsof -i :3000
```

### Clear npm Cache
```bash
npm cache clean --force
```

### Reinstall Dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

## Resources

- [React Documentation](https://reactjs.org)
- [React Router](https://reactrouter.com)
- [CSS Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [MDN Web Docs](https://developer.mozilla.org)

## License

This project is part of an internship training program.

---

*Last Updated: March 19, 2026*