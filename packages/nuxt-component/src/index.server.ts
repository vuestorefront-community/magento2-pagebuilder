import { apiClientFactory } from '@vue-storefront/core'

const setup = (options) => {
  return {
    config: {
      ...options
    },
  }
}

const { createApiClient } = apiClientFactory({
  onCreate: setup,
  api: {},
})

export { createApiClient }
