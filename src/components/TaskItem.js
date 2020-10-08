import React from 'react';
import PropTypes from 'prop-types';

function TaskItem(props) {
  const { id, value, isDone, update, remove } = props;
  return (
    <article>
      <h3>{`ID#${id}: ${value}`}</h3>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => {
          update({
            isDone: !isDone,
          });
        }}
      />
      <button onClick={remove}>Del.</button>
    </article>
  );
}

TaskItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.string.isRequired,
  isDone: PropTypes.bool,
  remove: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

TaskItem.defaultProps = {
  isDone: false,
};

export default TaskItem;
