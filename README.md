# Admin Panel

This project is a simple admin panel built with React and Tailwind CSS. It allows users to manage posts and view comments. Users can create, edit, delete, and publish/unpublish posts. Authentication is handled through a login and registration system. Axios is used to interact with the backend API.

## Features

- **User Authentication**: Users can register, login, and logout.
- **Post Management**: Create, edit, delete, and publish/unpublish posts.
- **Comment Viewing**: View comments associated with posts.
- **Authorization**: Access to the dashboard and post management is restricted to logged-in users.
  
## Technologies Used

- **React**: Frontend framework for building user interfaces.
- **Axios**: For making HTTP requests to the backend API.
- **React Router**: For client-side routing and navigation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **LocalStorage**: To store authentication tokens for persistent login sessions.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    git clone https://github.com/your-username/admin-panel.git

2. **Navigate into the project directory:**

    cd admin-panel

3. **Install dependencies:**

    npm install

4. **Start the development server:**

    npm start

5. **The application should now be running at http://localhost:3000.**

# Backend API

This project is designed to work with the backend API located at:
The API handles user authentication, post management, and comment management. Make sure your backend server is running before testing this frontend.

## Available Scripts

In the project directory, you can run the following commands:

- `npm start`
  Runs the app in development mode. Open http://localhost:3000 to view it in the browser.

- `npm run build`
  Builds the app for production to the `build` folder.

## Folder Structure

* `src/components`: Contains reusable components such as `Header`, `PostList`, `PostForm`, and `CommentList`.
* `src/pages`: Contains page components like `DashboardPage`, `EditPostPage`, `LoginPage`, and `RegisterPage`.
* `src/App.js`: Main application component with route handling.
* `src/index.js`: Entry point for the React application.