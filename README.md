React Todo App

This is a simple and modern Todo application built with React. It allows users to add, delete, and mark tasks as completed. Tasks are saved in localStorage so they persist even after refreshing the page. The UI is clean and responsive, and toast notifications are used to give user feedback on actions.

Features include:
- Add tasks with validation
- Mark tasks as completed
- Delete tasks
- View all active and completed tasks
- Toast notifications using react-toastify
- Form handling and validation using Formik and Yup
- Persistent data using localStorage
- Routing with React Router
- Responsive design
- Deployed on Vercel

Live Demo: https://todo-react-gamma-two.vercel.app/

How to run locally:
1. Clone the repository
2. Run `npm install` to install dependencies
3. Start the development server with `npm run dev`
4. Open `http://localhost:5173` in your browser

Scripts in package.json:
- `start`: runs the Vite dev server
- `build`: builds the app using Vite
- `preview`: previews the production build
- `lint`: runs ESLint on the code

Folder Structure:
- `/src/components`: Reusable components like Header, TodoItem, etc.
- `/src/pages`: Pages like Add, Completed, and Home
- `App.jsx`: Main application component handling routes
- `main.jsx`: Entry point of the React app

Technologies Used:
- React
- React Router DOM
- Formik
- Yup
- react-toastify
- Vite

The app is deployed and live at: https://todo-react-gamma-two.vercel.app/
