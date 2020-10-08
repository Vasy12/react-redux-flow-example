import React from 'react';
import { useFormik, Field } from 'formik';
import { connect } from 'react-redux';
import { createAddTaskAction } from '../actions';

function TaskForm({ dispatch }) {
  const formik = useFormik({
    initialValues: {
      value: '',
      isDone: false,
    },
    onSubmit: values => {
      dispatch(createAddTaskAction(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        name="value"
        onChange={formik.handleChange}
        placeholder="task value"
      />
      <button type="submit">add task</button>
    </form>
  );
}

export default connect()(TaskForm);
