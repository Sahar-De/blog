# React Blog Application

This project is a modern blog application built with React and Vite. It provides a clean interface for users to read, create, edit, and interact with blog posts,I didn't emphasize the appearance of the program, but the logic and coding were the main priority..

## Features

- **Post Feed:** View a list of blog posts sorted by creation date.
- **Create and Edit Posts:** Users can create new posts and edit existing ones.
- **Comments:** Add comments to posts to engage in discussions.
- **Search:** Search posts by title or content to quickly find relevant articles.
- **Top Posts:** Highlights popular posts based on likes.
- **Navigation:** Multi-page navigation including Home, About, Contact, and Docs pages.
- **State Management:** Uses React Context API to manage posts and application state.

## Technologies Used

- React
- Vite
- React Router for client-side routing
- React Context API for state management
- Fetch API for loading initial posts from a placeholder API
- React Hooks such as useCallBack useMemo

## Getting Started

To run the project locally:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.
4. Open your browser and navigate to `http://localhost:3000`.

## Project Structure

- `src/main/` - Main components related to posts, comments, and interactions.
- `src/context/` - React Context providers for managing state.
- `src/pages/` - Page components for routing.
- `src/nav/` - Navigation components.
- `src/general/` - General reusable components like search bar and notifications.

## License

This project is open source and available under the MIT License.
