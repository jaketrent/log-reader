exports.up = (db, options, done) => {
  db.createLogsTable((err, result) => {
    if (err) console.error('Error in logs table create', err)
    else console.log('Created logs table.')
    done(err)
  })
}
