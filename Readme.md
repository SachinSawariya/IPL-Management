# 🏏 IPL Players Management API

This is a RESTful API built with **Node.js (Express.js)** and **MongoDB** for managing IPL players. The API allows clients to list, create, update, delete, and retrieve detailed information about IPL players with features like pagination, filtering, sorting, searching, and input validation.

---

## 🚀 Features

- ✅ List all IPL players with pagination and team-based filtering
- 🔍 Search players by name
- 📊 Sort players by runs or salary
- ➕ Add a new player
- ✏️ Update existing player details
- ❌ Delete a player
- 📄 Get detailed description of a single player
- ✅ Input validation using **Joi**
- ⚠️ Robust error handling and structured API responses

---

## 🛠️ Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **Joi** (for validation)

---


## 📦 Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SachinSawariya/IPL-Management.git
   cd IPL-Management
2. **Install dependencies:**
    ```bash
    npm install
3. **Configure environment variables:**
    Create a .env file in the root directory and set your MongoDB URI.
    .env.example is provided:

    ```bash
    DB_URL=your_mongo_connection_string
4. **Configure environment variables:**
    ```bash
    npm run dev

Server will start on http://localhost:4000


# 📌 API Endpoints
 ## Kindly use the following Postman publish URL to explore the API endpoints and their request bodies in detail. https://documenter.getpostman.com/view/28960992/2sB2qZE2NA


For your reference: check below

All endpoints are prefixed with:
/api/v1/player

1. **List All Players**
    ```bash
    POST /api/v1/player/get-list

    Request Body:
        {
        "page": 1,
        "limit": 10,
        "team": "RCB",
        "search": "Virat",
        "sortBy": "salary", // or "runs"
        "sortOrder": "desc"
        }

2. **Get Player Details by ID**
    ```bash
    GET /api/v1/player/get/:id

    Example: GET http://localhost:4000/api/v1/player/get/664f11d2f78b381c842cf123

3. **Add New Player**
    ```bash
    POST /api/v1/player/add

    Request Body:
    {
    "name": "Virat Kohli",
    "team": "RCB",
    "country": "India",
    "runs": 6400,
    "image": "https://example.com/kohli.jpg",
    "role": "Batsman", // Batsman, Bowler, All-rounder
    "salary": 15000000
    }

4. **Update Existing Player**
    ```bash
    PATCH /api/v1/player/update/:id

    Example: PATCH http://localhost:4000/api/v1/player/update/664f11d2f78b381c842cf123

    
    Request Body:
    {
    "name": "Virat Kohli",
    "team": "RCB",
    "country": "India",
    "image": "https://example.com/kohli.jpg",
    "role": "Batsman",
    "salary": 15000000
    "runs": 650000,
    }

4. **Delete Player by ID**

    ```bash
    DELETE /api/v1/player/delete/:id

    Example: DELETE /api/v1/player/delete/664f11d2f78b381c842cf123



##  Validation Rules

- All input data is validated using Joi:

-   name: required, non-empty string

-   team: required, non-empty string

-   country: required, non-empty string

-   runs: required, integer

-   image: required, valid URL string

-   role: required, one of: "Batsman", "Bowler", "All-rounder"

-   salary: required, positive number