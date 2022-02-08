import { integrationPlugin } from '@vue-storefront/core'

export default integrationPlugin(({ integration }) => {
  integration.configure('pagebuilder', { ...<%= serialize(options) %> })
})
