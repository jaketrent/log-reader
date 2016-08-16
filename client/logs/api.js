import axios from 'axios'

export const query = {
  formatUrl({ query }) {
    const message = query // TODO: handle interest multi-field queries
    const gql = `
      {
        logs(message: "${message}") {
          message
        }
      }
    `
    return `/api/v1/graphql?query=${encodeURIComponent(gql)}`
  },
  request(args) {
    const { api } = args
    return axios.get(api.formatUrl(args))
  },
  deserializeSuccess(res) {
    return res.data.data.logs
  },
  deserializeError(res) {
    return res.data
  }
}
