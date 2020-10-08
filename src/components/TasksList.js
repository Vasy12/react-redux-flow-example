import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import { createRemoveTaskAction, createUpdateTaskAction } from '../actions';
import TaskItem from './TaskItem';

export const TasksList = props => {
  const { tasks, removeTask, updateTask } = props;
  return (
    <ul>
      {tasks.map((item, index) => (
        <li key={item.id}>
          <TaskItem
            {...item}
            remove={() => removeTask(index)}
            update={values => updateTask(index, values)}
          />
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = ({ todo }) => todo;

const mapDispatchToProps = dispatch => ({
  removeTask: taskIndex => dispatch(createRemoveTaskAction(taskIndex)),
  updateTask: (taskIndex, values) =>
    dispatch(createUpdateTaskAction(taskIndex, values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TasksList);
