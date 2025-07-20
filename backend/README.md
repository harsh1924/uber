// filepath: backend/README.md

# Backend API Documentation

This document explains the available user authentication endpoints:  
- `/users/register` – for registering a new user  
- `/users/login` – for logging in an existing user

---

## `/users/register`

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

## `/users/login`
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