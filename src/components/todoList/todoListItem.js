import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ record }) => (
  <div>
    {record.title} : {record.description}
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
