import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ record }) => (
  <div className="card">
    <p>
      {record.title} - {record.description}
    </p>
  </div>
)

const { object } = PropTypes;

TodoListItem.propTypes = {
  record: object
}

TodoListItem.defaultProps = {
  record: {}
}

export default TodoListItem
