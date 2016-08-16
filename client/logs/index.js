import { connect } from 'react-redux'
import React from 'react'

import * as actions from './actions'
import QueryForm from './query-form'
import List from './list'
import renderWithState from '../common/store/render'

function mapStateToProps(state) {
  return {
    logs: state.logs.logs,
    query: state.logs.query
  }
}

function mapDispatchToProps(dispatch) {
  return {
    runQuery(q) { dispatch(actions.runQuery(q)) },
    setQuery(q) { dispatch(actions.setQuery(q)) }
  }
}

function handleSubmit(props, evt) {
  evt.preventDefault()
  props.runQuery(props.query)
}

function Logs(props) {
  return (
    <div>
      <h1>Logs</h1>
      <QueryForm onChange={e => props.setQuery(e.target.value)}
                 onSubmit={e => handleSubmit(props, e)}
                 query={props.query} />
      <List logs={props.logs} />
    </div>
  )
}

export default function render(store, el) {
  renderWithState(connect(mapStateToProps, mapDispatchToProps)(Logs), el)
}
