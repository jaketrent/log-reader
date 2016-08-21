require('dotenv').config()

const fs = require('fs')
const readline = require('readline')
const stream = require('stream')

const db = require('./index')
let num = 1
const fsOpts = {
  flags: 'r',
  encoding: 'utf-8'
}

function getJson(line) {
  try {
    return JSON.parse(line)
  } catch (e) {
    return null
  }
}

function ingest(json, db) {
  // TODO: figure out why, if not using sync, not actually saving
  return db.logs.saveSync({
    message: json.msg,
    body: json
  }) // fire and forget
}

db.connect((err, db) => {
  const instream = fs.createReadStream(process.env.LOG_PATH, fsOpts)
  const outstream = new stream()
  outstream.readable = true
  outstream.writeable = true

  const rl = readline.createInterface({
    input: instream,
    output: outstream,
    terminal: false
  })

  rl.on('line', line => {
    let json
    if (json = getJson(line)) {
      console.log('ingest line ' + num)
      ingest(json, db)
    } else {
      console.log('json problem on line ' + num)
    }
    num += 1
  })

  rl.on('close', _ => process.exit(0))
  

})
