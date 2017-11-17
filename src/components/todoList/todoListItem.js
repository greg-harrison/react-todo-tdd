import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ record }) => {
  return <div>
    {record.title} : {record.description}
  </div>
}

const { arrayOf, object } = PropTypes;

TodoListItem.propTypes = {
  record: object
}

TodoListItem.defaultProps = {
  record: {}
}

export default TodoListItem
