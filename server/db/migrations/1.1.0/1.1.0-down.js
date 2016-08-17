exports.up = (db, options, done) => {
  db.dropLogsPayloadColumn((err, result) => {
    if (err) console.error('Error in payload column drop', err)
    else console.log('Dropped logs.payload column.')
    done(err)
  })
}
