# 📝 Todo App Backend

This is the backend API for the Todo App, built with **Express.js**, **Prisma**, and **TypeScript**. It provides a RESTful API for managing todos, supporting operations such as creating, updating, deleting, and retrieving tasks.

## 🚀 Tech Stack

- **Express.js** - Web framework for Node.js
- **Prisma** - ORM for database management
- **MySQL** - Relational database
- **TypeScript** - Strongly typed JavaScript

---

## 🔧 Setup Instructions

Follow these steps to set up the project locally:

### 1️⃣ Clone the repository:

```bash
git clone https://github.com/kushalshah14121997/todo-app-backend.git
```

### 2️⃣ Navigate to the project directory:

```bash
cd todo-app-backend
```

### 3️⃣ Install dependencies:

```bash
npm install
```

### 4️⃣ Configure environment variables:

Create a `.env` file in the root directory and add the following line:

```bash
DATABASE_URL="mysql://root:@localhost:3306/TODO_APP"
```

Ensure that MySQL is running and the database `TODO_APP` exists.

### 5️⃣ Run Prisma migrations:

```bash
npx prisma migrate dev --name init
```

This will create the necessary database tables.

### 6️⃣ Start the server:

```bash
npm run dev
```

### 7️⃣ The API will be available at:
➡ http://localhost:5000/api/tasks

