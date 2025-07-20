import React from 'react'
import "./Home.css"
import { FaCheck, FaTrash } from "react-icons/fa"

function Home({ todos, onDone, onDelete }) {


  return (
    <div className="row">
      <div className="home-wrapper col-lg-12 col-md-8 col-sm-6 col-12">
        <h2 className='heading'>All Tasks</h2>
        {todos.length === 0 ? (
          <p>No Tasks Yet...</p>
        ) : (
          <ul className="todo-list">
            {todos.map((item, index) => (
              <li key={index} className="todo-item">
                <span className="todo-text">{item}</span>
                <div className="todo-actions">
                  <button onClick={() => onDone(index)} className="edit-btn"><FaCheck className='check-icon' /></button>
                  <button onClick={() => onDelete(index)} className="delete-btn"><FaTrash /></button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default Home
