import * as router from '../router'
import logs from '../../logs'

export function map(basePath) {
  router.route('/', logs)

  // router.route('*', notFound)

  router.start(basePath)
}
