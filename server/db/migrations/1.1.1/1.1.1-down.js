exports.up = (db, options, done) => {
  db.dropLogsAutoId((err, result) => {
    if (err) console.error('Error in payload auto id drop', err)
    else console.log('Dropped logs.id auto seq.')
    done(err)
  })
}
