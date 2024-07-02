# Event App

This is a simple React application with a header and a Create Event page.

# React Event App with PostgreSQL and pgAdmin

This project sets up a React Event app with a PostgreSQL database and pgAdmin using Docker. It also includes a Node.js backend server to fetch data from the PostgreSQL database and serve it to the React frontend.

## Setup Instructions

### Step 1: Docker Setup

1. Ensure Docker is installed on your machine.

### Step 2. Start the React application:

In the project directory, run:

 ```bash
cd event-app
 npm install 
 npm start
   ```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\

### Step 3: Set Up Backend Server

1. Open another terminal.
2. Start the backend server:

    ```bash
    cd backend
    node index.js
    ```
### Step 4. Start the Docker containers

   ```bash
   docker-compose up -d
   ```
 The  init.sql file inside init-db directory has information of iitial SQL script.

### Accessing pgAdmin

1. Open your web browser and go to `http://localhost:8082`.
2. Log in to pgAdmin with the following credentials:
   - **Email**: admin@admin.com
   - **Password**: admin
3. Add a new server in pgAdmin with the following details:
   - **Name**: PostgreSQL
   - **Host**: postgres
   - **Port**: 5432
   - **Username**: admin
   - **Password**: admin

The `eventsdb` database should already contain an `events` table with one record.

With this setup, your React Event app project will include a PostgreSQL database and pgAdmin, all managed through Docker, and a Node.js backend server to fetch data from the database and serve it to the React frontend.

