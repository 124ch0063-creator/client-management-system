# Week 3 - Authentication System Testing Guide

Complete guide to test and verify the Week 3 Authentication implementation.

##  What I've Built This Week

1. ✅ Node.js + Express backend server
2. ✅ MongoDB database with User schema
3. ✅ Registration API with validation
4. ✅ Login API with password verification
5. ✅ JWT token authentication
6. ✅ bcryptjs password encryption
7. ✅ Protected API routes
8. ✅ React frontend integration
9. ✅ Login and Registration pages
10. ✅ Session handling with localStorage
11. ✅ Logout functionality
12. ✅ Form validation on frontend

---

## 🚀 STEP-BY-STEP SETUP INSTRUCTIONS

### **PART 1: Backend Setup**

#### Step 1: Install MongoDB

**Option A: Local MongoDB**

**Windows:**
1. Download from: https://www.mongodb.com/try/download/community
2. Run installer
3. Choose "Run as a Service"
4. Open Command Prompt and run: `mongod`
5. Verify: new terminal shows connection ready

**macOS:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu):**
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongod
```

**Option B: MongoDB Atlas (Cloud)**
1. Sign up at https://www.mongodb.com/cloud/atlas
2. Create a cluster
3. Get your connection string
4. Update `.env` file:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/client-management-system
   ```

---

#### Step 2: Install Backend Dependencies

```bash
cd d:\client-management-system\backend
npm install
```

**Packages installed:**
- express (server framework)
- mongoose (MongoDB ORM)
- bcryptjs (password encryption)
- jsonwebtoken (JWT tokens)
- dotenv (environment variables)
- cors (cross-origin requests)
- express-validator (input validation)
- nodemon (dev auto-reload)

---

#### Step 3: Verify Environment Configuration

Check `.env` file contains:
```bash
MONGODB_URI=mongodb://localhost:27017/client-management-system
PORT=5000
NODE_ENV=development
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
```

---

#### Step 4: Start Backend Server

```bash
npm start
```

You should see:
```
🚀 Server running on http://localhost:5000
📝 Test API: http://localhost:5000/api/test
✅ MongoDB connected successfully
```

**Keep this terminal open!**

---

### **PART 2: Frontend Setup**

#### Step 5: Install Frontend Dependencies

Open NEW terminal:
```bash
cd d:\client-management-system\frontend
npm install
```

---

#### Step 6: Start Frontend Development Server

```bash
npm start
```

Frontend should open at: `http://localhost:3000`
You should see the **Login Page**.

---

## 🧪 TESTING PROCEDURES

### **TEST 1: Register a New User**

1. On login page, click **"Register here"**
2. Fill in the form:
   - **Name:** John Doe
   - **Email:** john@example.com
   - **Password:** TestPass123 (must have uppercase, lowercase, numbers)
   - **Confirm Password:** TestPass123
3. Click **"Register"**

**Expected Result:**
- ✅ "Registration successful! Redirecting..." message
- ✅ Automatically redirected to Dashboard
- ✅ User logged in (see sidebar)

**If Failed:**
- Check backend console for errors
- Verify MongoDB is running
- Check browser console (F12) for error messages

---

### **TEST 2: Login with Registered User**

1. Click **"Logout"** (to return to login)
2. Fill in login form:
   - **Email:** john@example.com
   - **Password:** TestPass123
3. Click **"Login"**

**Expected Result:**
- ✅ Successfully logged in
- ✅ Redirected to Dashboard
- ✅ Sidebar visible with navigation

**If Failed:**
- Verify email and password are correct
- Check backend is running
- Check network tab in browser (F12) for API errors

---

### **TEST 3: Test with Postman (API Testing)**

#### Download & Open Postman

1. Download from: https://www.postman.com/downloads/
2. Open Postman

#### TEST 3A: Test Register Endpoint

1. **Create New Request**
   - Method: **POST**
   - URL: `http://localhost:5000/api/auth/register`
   
2. **Set Headers**
   - Key: `Content-Type`
   - Value: `application/json`

3. **Set Body (Raw JSON)**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "JanePass123",
  "confirmPassword": "JanePass123"
}
```

4. **Click Send**

**Expected Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "66x8y9z0a1b2c3d4e5f6g7h8",
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
}
```

**Copy the token** - you'll need it for protected routes.

---

#### TEST 3B: Test Login Endpoint

1. **Create New Request**
   - Method: **POST**
   - URL: `http://localhost:5000/api/auth/login`

2. **Set Headers**
   - Key: `Content-Type`
   - Value: `application/json`

3. **Set Body**
```json
{
  "email": "jane@example.com",
  "password": "JanePass123"
}
```

4. **Click Send**

**Expected Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "66x8y9z0a1b2c3d4e5f6g7h8",
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
}
```

---

#### TEST 3C: Test Protected Route (Get Me)

1. **Create New Request**
   - Method: **GET**
   - URL: `http://localhost:5000/api/auth/me`

2. **Set Headers**
   - Key: `Content-Type`
   - Value: `application/json`
   - Key: `Authorization`
   - Value: `Bearer <paste-token-from-login-response>`

Example:
```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

3. **Click Send**

**Expected Response:**
```json
{
  "success": true,
  "user": {
    "id": "66x8y9z0a1b2c3d4e5f6g7h8",
    "name": "Jane Smith",
    "email": "jane@example.com"
  }
}
```

---

### **TEST 4: Form Validation Tests**

#### Test 4A: Invalid Email Format

**Frontend:**
1. Go to Register page
2. Enter: `invalidemail` (no @ symbol)
3. Try to submit
- ✅ Should show error: "Please enter a valid email address!"

**Postman:**
1. POST to `/api/auth/register`
2. Body: `"email": "invalidemail"`
- ✅ Should return validation error

---

#### Test 4B: Weak Password

**Frontend:**
1. Go to Register page
2. Enter password: `pass` (less than 6 chars, no numbers)
3. Try to submit
- ✅ Should show: "Password must be at least 6 characters with uppercase, lowercase, and numbers!"

---

#### Test 4C: Password Mismatch

**Frontend:**
1. Go to Register page
2. Password: `ValidPass123`
3. Confirm Password: `DifferentPass456`
4. Try to submit
- ✅ Should show: "Passwords do not match!"

---

#### Test 4D: Duplicate Email

**Frontend:**
1. Register user with email: `test@example.com`
2. Try to register again with same email
- ✅ Should show: "Email is already registered"

---

#### Test 4E: Invalid Credentials on Login

**Frontend:**
1. Go to Login page
2. Enter: `test@example.com` and `WrongPassword123`
3. Click Login
- ✅ Should show: "Invalid email or password"

---

### **TEST 5: Session & Logout**

1. Login successfully
2. Check browser **Storage** (F12 → Application)
   - ✅ `authToken` saved in localStorage
   - ✅ `user` saved in localStorage

3. Click **Logout**
   - ✅ Redirected to Login page
   - ✅ localStorage cleared
   - ✅ Cannot access Dashboard without login

4. Try accessing Dashboard directly (http://localhost:3000/dashboard)
   - ✅ Should redirect to Login page

---

### **TEST 6: Browser Local Storage**

1. Login to the application
2. Open **Developer Tools** (F12)
3. Go to **Application** tab
4. Check **Local Storage → http://localhost:3000**

You should see:
- `authToken`: JWT token
- `user`: JSON with user data

---

## ✅ Validation Checklist

After completing all tests, verify:

- [ ] Backend server running on port 5000
- [ ] MongoDB connected and running
- [ ] Register creates new user in database
- [ ] Login with correct credentials succeeds
- [ ] Login with wrong credentials fails
- [ ] Passwords are encrypted (not plain text in DB)
- [ ] JWT tokens are generated on register/login
- [ ] Protected routes require valid token
- [ ] Token stored in localStorage
- [ ] Logout clears token and redirects to login
- [ ] Frontend validation prevents invalid submissions
- [ ] Backend validation also validates inputs
- [ ] Cannot access app without authentication
- [ ] Dashboard loads after successful login

---

## 🐛 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| **Backend won't start** | Check if port 5000 is free: `lsof -ti:5000` |
| **MongoDB connection error** | Ensure `mongod` is running in separate terminal |
| **CORS error in console** | Backend CORS is configured, make sure URLs match |
| **Token not stored** | Check browser console, verify register/login succeeded |
| **Can't reach backend from frontend** | Verify backend URL in `authService.js` is correct |
| **Invalid token error** | Token might be expired, logout and login again |
| **Form validation not working** | Clear browser cache (Ctrl+Shift+Delete) |
| **Can't access local MongoDB** | Check path, ensure full permissions to data directory |

---

## 📱 Password Rules (Important!)

Passwords MUST contain:
- ✅ At least 6 characters
- ✅ At least one UPPERCASE letter (A-Z)
- ✅ At least one lowercase letter (a-z)
- ✅ At least one number (0-9)

**Valid examples:**
- TestPass123
- Admin@123
- User2024Pass

**Invalid examples:**
- password (no uppercase/numbers)
- PASSWORD123 (no lowercase)
- Pass1 (too short)
- Test (no numbers)

---

## 🔐 Security Notes

1. **Password Encryption**: All passwords hashed with bcryptjs (10 rounds)
2. **JWT Secret**: Change in production!
3. **Token Expiry**: 7 days (configurable)
4. **HTTPS**: Use in production
5. **CORS**: Configured for localhost:3000 only

---

## 📊 Database Structure

**Users Collection:**
```
{
  _id: ObjectId,
  name: String,
  email: String (unique),
  password: String (hashed),
  createdAt: Date,
  updatedAt: Date
}
```

All passwords are encrypted with bcryptjs and never stored in plain text.

---

## 🚀 Next Steps (Week 4)

- Add more features to Client and Ticket pages
- Create backend APIs for clients and tickets
- Implement CRUD operations
- Add admin roles and permissions
- Setup email verification

---

**Week 3 Complete!** 🎉

All authentication features are implemented and tested.
You're ready to commit and push to GitHub.

