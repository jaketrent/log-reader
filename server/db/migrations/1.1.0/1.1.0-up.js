exports.up = (db, options, done) => {
  db.addLogsPayloadColumn((err, result) => {
    if (err) console.error('Error in payload column alter', err)
    else console.log('Added logs.payload column.')
    done(err)
  })
}
