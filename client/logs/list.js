import React from 'react'

const { arrayOf, object } = React.PropTypes

function Row(props) {
  return (
    <tr>
      <td>
        {props.log.message}
      </td>
    </tr>
  )
}

Row.PropTypes = {
  log: object
}

function renderRows(props) {
  return props.logs.map((t, i) =>
    <Row key={i + t.message}
         log={t} />
  )
}

function List(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>
            Message
          </th>
        </tr>
      </thead>
      <tbody>
        {renderRows(props)}
      </tbody>
    </table>
  )
}
List.PropTypes = {
  logs: arrayOf(object)
}

export default List
