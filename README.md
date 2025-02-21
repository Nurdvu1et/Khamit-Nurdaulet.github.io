Advanced Databases Project
Team Khamit Nurdaulet, Tynybek Dalu
This is a backend application using MongoDB, Node.js, Express.js, and JWT authentication. The project includes CRUD operations, authentication, and relationships between multiple collections.

🚀 Features

User authentication (JWT-based login/register)

CRUD operations for Products, Users, and Details

Secure API with middleware protection

MongoDB database with Mongoose models

Organized routes and controllers

📌 Prerequisites

Ensure you have the following installed:

Node.js (v18+ recommended)

MongoDB (local or cloud instance)

Git

📂 Project Setup

1️⃣ Clone the Repository

git clone https://github.com/YOUR_GITHUB_USERNAME/advanced-databases-project.git
cd advanced-databases-project

2️⃣ Install Dependencies

npm install

3️⃣ Configure Environment Variables

Create a .env file in the root directory and add the following:

PORT=10000
MONGO_URI=mongodb+srv://dbUser:db_userPassword@cluster0.hp3oq.mongodb.net/advanced-databases
JWT_SECRET=2fc88417a16827c5ed46e61d3a2a2a5c6bfd8181aaf0d219609e4d5ca45d60d6

4️⃣ Start MongoDB Server

If running locally, start MongoDB:

mongod

Or use a MongoDB Atlas connection string.

5️⃣ Start the Server

npm start

The API should now be running on http://localhost:10000

🔗 API Endpoints

Authentication

POST /api/auth/register → Register new user

POST /api/auth/login → Login user & receive token

Products

POST /api/products (🔒 Auth required) → Create a new product

GET /api/products → Get all products

PUT /api/products/:id (🔒) → Update a product

DELETE /api/products/:id (🔒) → Delete a product

Details

POST /api/details (🔒) → Add details to a product

GET /api/details → Retrieve all details

🛠 Testing with Insomnia/Postman

Open Insomnia or Postman.

Send a POST request to http://localhost:10000/api/auth/register with:

{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123"
}

Use the returned token for protected routes (Authorization: Bearer <token>).

📤 Deploying to Render

Create an account on Render.

Deploy a MongoDB instance (if not using local DB).

Link GitHub repository & set environment variables.
https://github.com/Nurdvu1et/Khamit-Nurdaulet.github.io.git

Deploy & access the API at https://your-app.onrender.com.

🛠 Technologies Used

Node.js & Express.js (Backend)

MongoDB & Mongoose (Database & ODM)

JWT Authentication (User security)

Insomnia/Postman (API testing)

📜 License

This project is licensed under the MIT License.
