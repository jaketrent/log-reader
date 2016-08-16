import { call, put } from 'redux-saga/effects'

import * as actions from './actions'
import * as api from './api'
import request from '../common/api/request'

export function* runQuery({ query }) {
  const des = yield call(request, { api: api.query, query })

  yield put(actions.runSuccess(des))
  // TODO: error check
}
