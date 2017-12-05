/* global expect, it, describe, jest, beforeEach */

import 'jsdom-global/register';
import React from 'react';
import { shallow, mount } from 'enzyme';
import TodoListItem from './todoListItem';

describe('TodoListItem component', () => {
  let component;

  let record = {
    id: '120329',
    title: 'Test Title',
    description: 'Test Description'
  }

  beforeEach(() => {
    component = shallow(
      <TodoListItem
        key={record.id}
        record={record}
      />,
    );
  });

  it('Should render successfully', () => {
    expect(component.exists()).toEqual(true);
  });
  it('Should render the title', () => {
    expect(component.find(record.title));
  })
});

