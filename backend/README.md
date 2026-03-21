# Client Management System - Backend API

Complete authentication backend for the Client Management System using Node.js, Express, and MongoDB.

## 📋 Features

- ✅ User Registration with validation
- ✅ User Login with password verification
- ✅ JWT Token-based authentication
- ✅ Password encryption with bcryptjs
- ✅ Protected routes with middleware
- ✅ CORS enabled for frontend integration
- ✅ Comprehensive error handling

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)
- npm or yarn

### 1. Install Dependencies

```bash
cd backend
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the backend folder:

```env
# Database Configuration
MONGODB_URI=mongodb://localhost:27017/client-management-system

# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Secret (Change this in production!)
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Token Expiration
JWT_EXPIRE=7d
```

### 3. Start MongoDB

**For Local MongoDB:**
```bash
# Windows
mongod

# macOS
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

**For MongoDB Atlas (Cloud):**
Replace `MONGODB_URI` with your connection string:
```
MONGODB_URI=mongodb+srv://username:password@clustername.mongodb.net/client-management-system
```

### 4. Start the Backend Server

```bash
npm start
```

Or for development with auto-reload:

```bash
npm run dev
```

Server will run on: `http://localhost:5000`

## 📚 API Endpoints

### Authentication Endpoints

#### 1. **Register User**
- **POST** `/api/auth/register`
- **Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123",
  "confirmPassword": "Password123"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### 2. **Login User**
- **POST** `/api/auth/login`
- **Body:**
```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```
- **Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIs...",
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### 3. **Get Current User** (Protected)
- **GET** `/api/auth/me`
- **Headers:**
```
Authorization: Bearer <token>
```
- **Response:**
```json
{
  "success": true,
  "user": {
    "id": "...",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

#### 4. **Logout**
- **POST** `/api/auth/logout`
- **Response:**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

## 🧪 Testing with Postman

1. **Open Postman**
2. **Create a new collection** called "CMS Authentication"
3. **Create requests for each endpoint**

### Test Sequence:

1. **Register User** - POST to `/api/auth/register`
   - Copy the token from response

2. **Login User** - POST to `/api/auth/login`
   - Copy the token from response

3. **Get Me** - GET to `/api/auth/me`
   - Paste token in Authorization header (Bearer token)

4. **Logout** - POST to `/api/auth/logout`

## 🔒 Security Features

- **Password Encryption**: Uses bcryptjs (10 salt rounds)
- **JWT Tokens**: Secure token-based authentication
- **Input Validation**: Email format, password strength
- **Protected Routes**: Middleware to verify tokens
- **CORS**: Configured for frontend access

## 📁 Project Structure

```
backend/
├── controllers/
│   └── authController.js      # Login & Register logic
├── middleware/
│   ├── auth.js                # JWT verification
│   └── validation.js          # Input validation rules
├── models/
│   └── User.js                # MongoDB User schema
├── routes/
│   └── auth.js                # Authentication routes
├── utils/
├── .env                        # Environment variables
├── .gitignore
├── package.json
├── server.js                   # Main server file
└── README.md
```

## 🚀 Deployment Checklist

Before deploying to production:

1. ✅ Change JWT_SECRET in `.env`
2. ✅ Use MongoDB Atlas (cloud) or secure database
3. ✅ Set NODE_ENV=production
4. ✅ Test all endpoints thoroughly
5. ✅ Enable HTTPS
6. ✅ Add rate limiting
7. ✅ Setup logging
8. ✅ Configure CORS properly

## 🐛 Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check MONGODB_URI is correct
- Verify network connectivity

**Token Expired Error:**
- Frontend should refresh token
- Clear localStorage and login again

**CORS Error:**
- Ensure origin is allowed in server.js
- Check Content-Type headers

**Port Already in Use:**
- Change PORT in .env
- Or kill process: `lsof -ti:5000 | xargs kill -9`

## 📝 Notes

- Tokens expire after 7 days (configurable in .env)
- Passwords must have uppercase, lowercase, and numbers
- Email must be unique per user
- Always use HTTPS in production

## 🤝 Contributing

For issues or improvements, please create a GitHub issue or pull request.

---

**Backend Setup Complete!** 🎉

Next: Integrate with the frontend React application.
