import types from './types'

/* State Shape
{
  records: [],
  draft: {
    title: '',
    description: ''
  }
}
*/

const recordListReducer = (state = false, action) => {
  switch (action.type) {
    case types.FETCH_RECORDS: state.records = action.payload.data.records
    case types.ADD_RECORD: state.records = state.records.push(action.payload.draft)

    default: return state
  }
}

export default recordListReducer
