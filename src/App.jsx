
import './App.css'
import Layout from './components/Layout';
import TodoItem from './components/TodoItem';
import { useState } from 'react';
import Home from './pages/Home'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from "react-router-dom";
import Completed from './pages/Completed';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [todos,setTodos]=useState([]);
  const [completedTodos,setCompletedTodos]=useState([])
  
  const handleDelete = (index) => {
    setTodos(todos => todos.filter((_, i) => i !== index));
    toast.error('Task deleted!');
  };
  
  const handleDone = (index) => {
    const doneTodo = todos[index];
    setTodos(todos.filter((_, i) => i !== index));
    setCompletedTodos(prev => [...prev, doneTodo]);
    toast.success('Task completed!');
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
       <Route index element={<Home todos={todos} onDelete={handleDelete} onDone={handleDone} />} />
       <Route path="/add" element={<TodoItem  setTodos={setTodos} />}/>
       <Route path="/completed" element={<Completed completedTodos={completedTodos} />} />
      </Route>
    )
  )

  return (
    
    <>
      <RouterProvider router={router}/>
      <ToastContainer />
    </>
  )
}

export default App
