import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './todoListItem';

import { map } from 'lodash';
// import { connect } from 'redux';

const TodoList = ({ records }) => {
  const values = map(records, record => (
    <TodoListItem key={record.id} record={record} />
  ));
  return (
    <div>
      {values}
    </div>
  )
}

const { arrayOf, object } = PropTypes;

TodoList.propTypes = {
  records: arrayOf(object),
};

TodoList.defaultProps = {
  records: [],
};

export default TodoList
