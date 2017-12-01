/* global it, expect */

import React from 'react';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import ConnectedApp, { App } from './App';

const mockStore = configureStore();

it('App renders without crashing', () => {

  const initialState = {
    record: {
      records: []
    }
  }

  const store = mockStore(initialState)
  const component = shallow(<ConnectedApp store={store} />);
  expect(component.exists()).toEqual(true);
});
