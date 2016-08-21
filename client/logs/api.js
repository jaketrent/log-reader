import axios from 'axios'

import * as utils from './utils'

export const query = {
  formatUrl() {
    return '/api/v1/logs'
  },
  serialize({ query }) {
    return { data: utils.parseBody(query) }
  },
  request(args) {
    const { api } = args
    return axios.post(api.formatUrl(args), api.serialize(args))
  },
  deserializeSuccess(res) {
    return res.data.data
  },
  deserializeError(res) {
    return res.data
  }
}
