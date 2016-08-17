exports.up = (db, options, done) => {
  db.addLogsAutoId((err, result) => {
    if (err) console.error('Error in payload auto id alter', err)
    else console.log('Added logs.id auto seq.')
    done(err)
  })
}
