// TODO: impl with massivejs

function query(query) {
  console.log('query', query)
  return new Promise(resolve => resolve([{ id: 1, message: 'some log' }]))
}

exports.query = query
