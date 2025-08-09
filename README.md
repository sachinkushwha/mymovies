# Streamify
Streamify is a full-stack movie sharing application where users can discover, upload, and watch movies. It features a Node.js and Express backend with MongoDB for data storage, and a responsive React frontend built with Vite and styled with Tailwind CSS.

## Features

- **User Authentication**: Secure signup and login system using JWT.
- **Movie Gallery**: Browse a main feed of user-submitted movies.
- **Dynamic Search**: Instantly find movies by title.
- **Upload Movies**: Authenticated users can add new movies by providing a name, thumbnail URL, and a link to the movie.
- **Personal Profile**: Users have a dedicated page to view, update, and delete their movie uploads.
- **Share Functionality**: Native share option to easily share movie links.
- **Responsive Design**: A clean and functional UI that works on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React, Vite, React Router, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: Configured for Vercel

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v18 or higher)
- npm or a compatible package manager
- A MongoDB database instance (local or cloud)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/sachinkushwha/mymovies.git
    cd mymovies
    ```

2.  **Set up the Backend:**
    - Navigate to the backend directory:
      ```sh
      cd backend
      ```
    - Install dependencies:
      ```sh
      npm install
      ```
    - Create a `.env` file in the `backend` directory and add your environment variables:
      ```env
      MONGO_URL=your_mongodb_connection_string
      JWT_SECRET=your_secret_key_for_jwt
      ```
    - Start the backend server:
      ```sh
      npm start
      ```
      The server will be running on `http://localhost:3000`.

3.  **Set up the Frontend:**
    - Open a new terminal and navigate to the frontend directory:
      ```sh
      cd frontent
      ```
    - Install dependencies:
      ```sh
      npm install
      ```
    - Start the development server:
      ```sh
      npm run dev
      ```
      The application will open in your browser, typically at `http://localhost:5173`.

## API Endpoints

The backend provides the following API endpoints:

| Method | Endpoint         | Description                                        | Auth Required |
| :----- | :--------------- | :------------------------------------------------- | :------------ |
| `POST` | `/auth/signup`   | Register a new user.                               | No            |
| `POST` | `/auth/login`    | Log in an existing user and get a JWT.             | No            |
| `GET`  | `/`              | Get a list of all movies.                          | No            |
| `POST` | `/movies`        | Add a new movie.                                   | Yes           |
| `GET`  | `/profile`       | Get all movies uploaded by the authenticated user. | Yes           |
| `DELETE`| `/delete/:id`    | Delete a specific movie by its ID.                 | Yes           |
| `PUT`  | `/update/:id`    | Update details for a specific movie.               | Yes           |

## Deployment

This project includes `vercel.json` configuration files in both the `backend` and `frontent` directories, making it ready for seamless deployment to Vercel. The backend is configured to run as a serverless function.
