// TODO: impl with massivejs

function parseQuery(query) {
  return Object.keys(query).reduce((acc, key) => {
    return Object.assign(acc, {
      ["body ->> '" + key + "'"]: query[key]
    })
  }, {})
}

function query(db, query) {
  return new Promise((resolve, reject) => {
    // const dbQuery = parseQuery(query)
    // console.log('dbQuery', dbQuery)
    const dbQuery = { "body ->> 'msg'": 'eventstore error' }
    db.logs.findDoc(dbQuery, { limit: 50 }, (err, res) => {
      console.log('err', err)
      console.log('res', res)
      if (err) return reject(err)

      return resolve(res)
    })
  })
}

exports.query = query
