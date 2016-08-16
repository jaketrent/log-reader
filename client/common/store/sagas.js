import { takeEvery } from 'redux-saga'
import { fork } from 'redux-saga/effects'

import * as logsActions from '../../logs/actions'
import * as logsSagas from '../../logs/sagas'

export default function* root() {
  yield* [
    fork(takeEvery, logsActions.TYPES.RUN_QUERY, logsSagas.runQuery),
  ]
}
