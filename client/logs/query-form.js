import { connect } from 'react-redux'
import React from 'react'

import Field from '../common/components/field'

function QueryForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <Field errors={props.errors}
             label="Query"
             name="query"
             onFieldChange={props.onChange}
             value={props.query} />
      <input type="submit" value="Query" />
    </form>
  )
}

export default QueryForm
