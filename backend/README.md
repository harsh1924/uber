// filepath: docs/users/register/README.md

# `/users/register` Endpoint Documentation

## Description
This endpoint is used to register a new user. The user details are provided in the request body. Upon successful registration, a JSON response is returned containing an authentication token and the created user object.

---

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

## Example

### ✅ Successful Request
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


{
  "token": "your_jwt_token_here",
  "user": {
    "_id": "user_id",
    "fullname": { "firstname": "John", "lastname": "Doe" },
    "email": "johndoe@example.com"
    // ...other user details...
  }
}
