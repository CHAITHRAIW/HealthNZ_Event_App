# Event App

This is a simple React application with a header and a Create Event page.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# React Event App with PostgreSQL and pgAdmin

This project sets up a React Event app with a PostgreSQL database and pgAdmin using Docker. It also includes a Node.js backend server to fetch data from the PostgreSQL database and serve it to the React frontend.

## Folder Structure

event-app/
|-- backend/
| |-- index.js
|-- docker-compose.yml
|-- init-db/
| |-- init.sql
|-- public/
|-- src/
| |-- components/
| | |-- Common/
| | | |-- Header.js
| | | |-- Header.css
| | |-- Event/
| | | |-- CreateEvent.js
| | | |-- CreateEvent.css
| | |-- Home.js
| |-- App.css
| |-- App.js
| |-- index.css
| |-- index.js
|-- README.md
|-- package.json
|-- .env


## Setup Instructions

### Step 1: Docker Setup

1. Ensure Docker is installed on your machine.
2. Create a `docker-compose.yml` file in the root directory (`event-app/`).
3. Create an `init-db` directory and an `init.sql` file in the `event-app` directory (`event-app/init-db/init.sql`).
4. Start the Docker containers:

    ```bash
    docker-compose up -d
    ```

### Step 2: Set Up Backend Server

1. Navigate to the `event-app` directory and create a `backend` directory.
2. Initialize a new Node.js project in the `backend` directory inside `event-app`:

    ```bash
    mkdir backend
    cd backend
    npm init -y
    npm install express pg cors
    ```

3. Create an `index.js` file in the `backend` directory.

4. Start the backend server:

    ```bash
    cd backend
    node index.js
    ```

### Step 3: Update React Application

1. Ensure your React component for creating events is set up correctly. Update `CreateEvent.js` in `src/components/Event/`.

### Running the Application

1. **Start the Docker containers**:

    ```bash
    docker-compose up -d
    ```

2. **Start the backend server**:

    ```bash
    cd backend
    node index.js
    ```

3. **Start the React application**:

    ```bash
    cd event-app
    npm start
    ```

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

With this setup, your React Event app project will include a PostgreSQL database and pgAdmin, all managed through Docker, and a Node.js backend server to fetch data from the database and serve it to the React frontend. Let me know if you need any further assistance! 🚀

