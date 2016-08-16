import { TYPES } from './actions'

import { createWithHandlers } from '../common/reducer'

const initialState = {
  query: '',
  logs: []
}

function runSuccess(state, action) {
  return {
    ...state,
    logs: action.logs
  }
}

function setQuery(state, action) {
  return {
    ...state,
    query: action.query
  }
}

export default createWithHandlers({
  [TYPES.RUN_SUCCESS]: runSuccess,
  [TYPES.SET_QUERY]: setQuery
}, initialState)
