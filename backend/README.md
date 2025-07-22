// filepath: backend/README.md

# Backend API Documentation

## 📌 Endpoints

| Method | Route               | Description                    | Auth Required |
|-------|--------------------|--------------------------------|--------------:|
| POST  | `/users/register`   | Register a new user           | ❌           |
| POST  | `/users/login`      | Login user & get token        | ❌           |
| GET   | `/users/profile`    | Get logged-in user profile    | ✅           |
| GET   | `/users/logout`     | Logout and blacklist token    | ✅           |
| POST  | `/captains/register`| Register a new captain        | ❌           |


---

## 🧩 Auth Middleware

Middleware: `authUser`  
- Protects routes by verifying JWT token.
- Supports tokens sent in **HTTP-only cookies** or in `Authorization: Bearer <token>` header.
- Checks if token is blacklisted.
- Attaches the authenticated user to `req.user`.

---

## User Routes
### `/users/register`

### Description
Register a new user. The user details are sent in the request body. Returns a JWT token and the created user object on success.

## Request Details

- **URL:** `/users/register`
- **Method:** `POST`
- **Content-Type:** `application/json`

### Request Body
The endpoint expects a JSON object with the following structure:

```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "lastname": "string (optional, if provided must be at least 3 characters)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 5 characters, required)"
}
```
## Example
**Request JSON:**
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### ✅ Success Request
```json
{
  "token": "your_jwt_token_here",
  "user": {
    "_id": "user_id",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "johndoe@example.com"
  }
}
```

---

### `/users/login`
### Description
Login an existing user. The user details are sent in the request body. Returns a JWT token and the user object on success.

## Request Details
- **URL:** `/users/login`
- **Method:** `POST`
- **Content-Type:** `application/json`

### Request Body
The endpoint expects a JSON object with the following structure:

```json
{
  "email": "string (valid email, required)",
  "password": "string (min 6 characters, required)"
}
```

## Example


**Request JSON:**
```json
{
    "email": "test@gmail.com",
    "password": "Test@123"
}
```
### ✅ Success Request
```json
{
    "token": "jwt_token",
    "user": {
        "fullname": {
            "firstname": "Harsh",
            "lastname": "Panwar"
        },
        "_id": "687c8e051258f0e74c9d0d30",
        "email": "test@gmail.com",
        "password": "$2b$10$MHCRtoJS9klpIpULs/tTeO6./jAJ2ogCP7gCH66ApfhhrAyMN9Tou",
        "__v": 0
    }
}
```

---

### `/users/profile`
### Description
Retrives the profile information of the currently authenticated user.

## Request Details
- **URL:** `/users/profile`
- **Method:** `GET`
- **Auth:** ` Bearer Token or Cookie token`


### ✅ Success Request
```json
{
  "_id": "id",
  "fullname": { "firstname": "John", "lastname": "Doe" },
  "email": "john@example.com"
}
```

---

### `/users/logout`
### Description
Logout the current user and blacklist the token provided in cookie or headers.

## Request Details
- **URL:** `/users/logout`
- **Method:** `GET`
- **Auth:** ` Bearer Token or Cookie token`


### ✅ Success Request
```json
{ "message": "Logged Out" }
```

---


## Captain Routes
### `/captains/register`
### Description
Register a new captain by providing name, email, password, and vehicle details.
Returns a JWT token and the created captain object on success.

## Request Details
- **URL:** `/captains/register`
- **Method:** `POST`
- **Auth:** `application/json`


**Request JSON:**
```json
{
  "fullname": {
    "firstname": "string (min 3 characters, required)",
    "lastname": "string (optional)"
  },
  "email": "string (valid email, required)",
  "password": "string (min 5 characters, required)",
  "vehicle": {
    "color": "string (required)",
    "plate": "string (required)",
    "capacity": "number (required)",
    "vehicleType": "string (required)"
  }
}
```

### ✅ Success Request
```json
{
  "token": "your_jwt_token_here",
  "captain": {
    "_id": "captain_id",
    "fullname": { "firstname": "Alex", "lastname": "Smith" },
    "email": "alexsmith@example.com",
    "vehicle": {
      "color": "Red",
      "plate": "XYZ1234",
      "capacity": 4,
      "vehicleType": "Sedan"
    }
  }
}
```

---

