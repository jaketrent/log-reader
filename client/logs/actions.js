import types from 'redux-types'

import * as alertsUtils from '../alerts/utils'

export const TYPES = types('logs',
  'RUN_QUERY',
  'RUN_SUCCESS',
  'RUN_ERROR',
  'SET_QUERY'
)

export function runQuery(query) {
  return {
    type: TYPES.RUN_QUERY,
    query
  }
}

export function runSuccess(logs) {
  return {
    type: TYPES.RUN_SUCCESS,
    logs,
    alerts: alertsUtils.createSuccess('Query returned')
  }
}

export function runError(errors) {
  return {
    type: TYPES.RUN_ERROR,
    alerts: alertsUtils.createFromErrors(errors)
  }
}

export function setQuery(query) {
  return {
    type: TYPES.SET_QUERY,
    query
  }
}
