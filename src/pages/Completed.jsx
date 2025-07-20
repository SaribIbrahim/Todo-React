import React from 'react';
import './Completed.css';

function Completed({ completedTodos }) {
  return (
    <div className="completed-wrapper">
      <h2 className="heading">Completed Tasks</h2>
      {completedTodos.length === 0 ? (
        <p className="no-todos">No completed tasks yet.</p>
      ) : (
        <ul className="completed-list">
          {completedTodos.map((item, idx) => (
            <li key={idx} className="completed-item">
              <span className="completed-text">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Completed;
