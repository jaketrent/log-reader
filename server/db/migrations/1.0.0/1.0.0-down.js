// TODO: dunno, figure out if massive-migrate supports down API
exports.up = (db, options, done) => {
  db.dropLogsTable((err, result) => {
    if (err) console.error('Error in logs table delete', err)
    else console.log('Deleted logs table.')
    done(err)
  })
}
