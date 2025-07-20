# React Todo App

A simple and modern Todo application built with React. This app allows users to add, complete, and delete tasks, with persistent storage using the browser's localStorage. The UI is styled with custom CSS and includes toast notifications for user actions.

## Features

- Add new tasks with validation
- Mark tasks as completed (moves them to a Completed page)
- Delete tasks
- View all active and completed tasks
- Persistent storage with localStorage
- Responsive and clean UI
- Toast notifications for actions (using react-toastify)


## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Start the development server:**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

- Use the **Add** page to create new tasks.
- View all active tasks on the **Home** page.
- Mark tasks as completed or delete them using the action buttons.
- View completed tasks on the **Completed** page.

## Folder Structure

```
Todo/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components (Nav, Layout, TodoItem)
│   ├── pages/        # Page components (Home, Completed)
│   ├── App.jsx       # Main app component
│   ├── main.jsx      # Entry point
│   └── ...
├── package.json      # Project metadata and scripts
├── vite.config.js    # Vite configuration
└── README.md         # Project documentation
```

## Dependencies

- React
- React Router DOM
- Formik & Yup (for form handling and validation)
- react-toastify (for toast notifications)
- Vite (for development/build)

## License

This project is licensed under the MIT License.
