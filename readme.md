# ToDO List

A simple and responsive Todo List web application to manage daily tasks efficiently.

## 🚀 Features

- Add new tasks
- Edit existing tasks
- Delete tasks
- Clean and simple user interface
- Persistent task management with PostgreSQL

## Tech Stack

- Node.js
- Express.js
- EJS
- PostgreSQL
- HTML
- CSS

# Database Setup

1. Create a PostgreSQL database.

2. Run the schema file:
```bash
psql -U postgres -d your_database_name -f schema.sql
```

## Installation

1. Clone the repository
```bash
git clone https://github.com/YuvrajAlone/ToDo.git
```
2. Navigate to the project folder
```bash
cd todo list
```
3. Install dependencies
```bash
npm install
```
4. Create a .env file and add your database credentials

## Running the App

Start the server:
```bash
node index.js
```
Then open your browser and go to:
```bash
http://localhost:3000