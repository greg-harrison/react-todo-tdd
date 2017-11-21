import types from './types';

/* State Shape
{
  records: [],
  draft: {
    title: '',
    description: ''
  }
}
*/

const initialState = {
  records: [],
  draft: {
    title: '',
    description: '',
  },
};

const recordListReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_RECORDS: {
      return { ...state, records: state.records.concat(action.payload.data.data.records) }
    }

    case types.ADD_RECORD: {
      return state.records = state.records.push(action.payload.draft);
    }

    default: return state
  }
}

export default recordListReducer
