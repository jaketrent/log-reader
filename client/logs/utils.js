const range = n => Array.from(Array(n))

const trim = str => str.trim()

function splitKeyVal(keyAndVal) {
  const parts = keyAndVal.split(':').map(trim)

  const key = parts[0]
  const value = parts[1]

  return value && value.length > 0
    ? { [key]: value }
    : {}
}

function toKeyAndValPairs(acc, str) {
  if(/^:$/.test(str)) {
    acc[acc.length - 1] += str
  } else if (/:/.test(str)) {
    acc = acc.concat([str + ' '])
  } else if (acc.length > 0) {
    acc[acc.length - 1] += str + ' '
  } else if (str) {
    acc = [str + ' ']
  }

  return acc
}

function toMapOfKeysAndVals(acc, keyAndVal) {
  return {
    ...acc,
    ...splitKeyVal(keyAndVal)
  }
}

export function parsePayload(query) {
  if (!query) return {}

  return query.split(' ')
    .reduce(toKeyAndValPairs, [])
    .map(trim)
    .reduce(toMapOfKeysAndVals, {})
}
