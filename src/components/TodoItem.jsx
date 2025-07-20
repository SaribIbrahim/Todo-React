import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./TodoItem.css";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoItem({ setTodos }) {

  const { handleSubmit, values, errors, touched, handleChange, handleBlur, handleReset } = useFormik({
    initialValues: {
      task: ""
    },
    validationSchema: Yup.object({
      task: Yup.string()
        .required("Task is required")
        .min(10, "At least 10 characters are required")
    }),
    onSubmit: (values, { resetForm }) => {
      setTodos(items => [...items, values.task]);
      toast.success("Task Created Successfully")
      resetForm();
    }
  });

  return (
    <div className="todo-wrapper">
      <form className="todo-form" onSubmit={handleSubmit} onReset={handleReset}>
        <h2 className="text-center">Add a New Task</h2>

        <div className="mb-3">
          <label htmlFor="task" className="form-label">Todo Task</label>
          <input
            id="task"
            name="task"
            type="text"
            className={`form-control ${errors.task && touched.task ? "is-invalid" : ""}`}
            value={values.task}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Make Pro"
          />
          {errors.task && touched.task && (
            <div className="error">{errors.task}</div>
          )}
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default TodoItem;
