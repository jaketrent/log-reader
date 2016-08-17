import test from 'ava'

import { parsePayload as subject } from '../utils'

test('empty object by default', t => {
  t.deepEqual(subject(), {})
})

test('key without value is still empty object', t => {
  const query = 'key'
  t.deepEqual(subject(query), {})
})

test('key with colon only is still empty object', t => {
  const query = 'key:'
  t.deepEqual(subject(query), {})
})

test('single key with single word value', t => {
  const query = 'key:val'
  t.deepEqual(subject(query), { key: 'val' })
})

test('two keys', t => {
  const query = 'key:val key2:val2'
  t.deepEqual(subject(query), { key: 'val', key2: 'val2' })
})

test('single key with val with spaces', t => {
  const query = 'key:val with spaces'
  t.deepEqual(subject(query), { key: 'val with spaces' })
})

test('multiple keys with val with spaces', t => {
  const query = 'key:val with spaces key2:more vals'
  t.deepEqual(subject(query), { key: 'val with spaces', key2: 'more vals' })
})

test('space between colon', t => {
  const query = 'key : val'
  t.deepEqual(subject(query), { key: 'val' })
})

test('multiple with space between colon', t => {
  const query = 'key : val key2: val2'
  t.deepEqual(subject(query), { key: 'val', key2: 'val2' })
})

test('multiple with space between colon and val with spaces', t => {
  const query = 'key : val is here key2: val2 also there'
  t.deepEqual(subject(query), { key: 'val is here', key2: 'val2 also there' })
})
